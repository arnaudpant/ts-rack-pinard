import { toast } from "react-toastify";
import { FirestoreUpdateDocument } from "../api/Firestore";
import { useAuth } from "../context/AuthUserContext";
import { Bottle, Rack } from "../types/RacksTypes";

const useUpdateRacks = () => {
    const { authUser } = useAuth();

    const updateRacks = (newBootle: Bottle) => {
        /** 1. Filtre rack modifié */
        const rackTarget = authUser.userDocument.racks.filter(
            (rack) => rack.idrack === newBootle.rackId
        )[0];

        /** 2. Recuperation index de la nouvelle bouteille */
        const bottlesIndex = rackTarget.bottles.filter(
            (bottle) => bottle.id == newBootle.id
        )[0].index;

        /** 3. Mise a jour de la case avec nouvelle bouteille */
        rackTarget.bottles[bottlesIndex] = newBootle;

        /** 4. Mise a jour liste des racks */
        const listOldRacks = authUser.userDocument.racks.filter(
            (rack) => rack.idrack !== newBootle.rackId
        );
        const listNewracks = [...listOldRacks, rackTarget];

        /** Envoi dans Firestore */
        addNewBottleInrack(listNewracks);
    };

    /**
     * PAGE CONTAINER A VERRE
     */
    const consommeBottle = (oldBootle: Bottle) => {
        /** 1. Filtre rack bouteilles cosnommées */
        const bottlesDrinkList: Bottle[] = authUser.userDocument.bottlesDrink;

        /** 2. Recuperation de la taille de array = dernier index */
        const bottlesIndex = bottlesDrinkList.length;

        /** 3. Mise a jour de la case avec bouteille */
        bottlesDrinkList[bottlesIndex] = oldBootle;
        bottlesDrinkList[bottlesIndex].drink = Date.now();

        /** Envoi dans Firestore */
        addOldBottleInrackConsomme(bottlesDrinkList);
    };

    const deletedBottleDrink = (idBottleDrink: string) => {
        const listBottlesInContainer =
            authUser.userDocument.bottlesDrink.filter(
                (bottlesDrink) => bottlesDrink.id !== idBottleDrink
            );
        sendBottleDrinkInFirebase(listBottlesInContainer);
    };

    /**
     * PAGE CAVE VIRTUELLE
     */
    const addFavorisBottle = (favBootle: Bottle) => {
        /** 1. Filtre rack bouteilles cosnommées */
        const bottlesFavoriList: Bottle[] = authUser.userDocument.bottlesFavoris;

        /** 2. Recuperation de la taille de array = dernier index */
        const bottlesIndex = bottlesFavoriList.length;

        /** 3. Mise a jour de la case avec bouteille */
        bottlesFavoriList[bottlesIndex] = favBootle;

        /** Envoi dans Firestore */
        const deleted: boolean = false
        sendBottleInPageFavori(bottlesFavoriList, deleted);
    };

    const deletedBottleFavoris = (idBottleFavoris: string) => {
        const listBottlesInFavoris =
            authUser.userDocument.bottlesFavoris.filter(
                (bottlesFavoris) => bottlesFavoris.id !== idBottleFavoris
            );
            const deleted: boolean = true
        sendBottleInPageFavori(listBottlesInFavoris, deleted);
    };

    /** =================== */
    const deleteBottle = (bottleEmpty: Bottle) => {
        const deleted: boolean = true;
        const caseEmpty: Bottle = {
            id: bottleEmpty.id,
            millesime: null,
            type: "vide",
            couleur: "",
            gout: "",
            pays: null,
            appellation: null,
            exploitation: null,
            cuvee: null,
            accords: [],
            prix: null,
            achat: null,
            rackId: bottleEmpty.rackId,
            index: bottleEmpty.index,
            drink: "",
        };
        /** 1. Filtre rack modifié */
        const rackTarget = authUser.userDocument.racks.filter(
            (rack) => rack.idrack === bottleEmpty.rackId
        )[0];

        /** 2. Recuperation index de la nouvelle bouteille */
        const bottlesIndex = rackTarget.bottles.filter(
            (bottle) => bottle.id == bottleEmpty.id
        )[0].index;

        /** 3. Mise a jour de la case avec nouvelle bouteille */
        rackTarget.bottles[bottlesIndex] = caseEmpty;

        /** 4. Mise a jour liste des racks */
        const listOldRacks = authUser.userDocument.racks.filter(
            (rack) => rack.idrack !== bottleEmpty.rackId
        );
        const listNewracks = [...listOldRacks, rackTarget];

        /** Envoi dans Firestore */
        addNewBottleInrack(listNewracks, deleted);
    };

    const addNewBottleInrack = async (racks: Rack[], deleted?: boolean) => {
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            ...authUser.userDocument,
            racks,
        });
        if (error) {
            toast.error(error.message, { autoClose: 3000 });
            return;
        }
        deleted === true
            ? toast.success("Bouteille supprimée de votre rack", {
                  autoClose: 2000,
              })
            : toast.success("Bouteille ajoutée à votre rack", {
                  autoClose: 2000,
              });
    };

    const sendBottleDrinkInFirebase = async (bottlesDrink: Bottle[]) => {
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            ...authUser.userDocument,
            bottlesDrink,
        });
        if (error) {
            toast.error(error.message, { autoClose: 3000 });
            return;
        }
        toast.success("Bouteille supprimée de votre container", {
            autoClose: 2000,
        });
    };

    const sendBottleInPageFavori = async (bottlesFavoris: Bottle[], deleted: boolean) => {
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            ...authUser.userDocument,
            bottlesFavoris,
        });
        if (error) {
            toast.error(error.message, { autoClose: 3000 });
            return;
        }
        deleted === true
            ? toast.success("Bouteille supprimée de la liste", {
                  autoClose: 2000,
              })
            : toast.success("Bouteille sauvegardée avec succès", {
                  autoClose: 2000,
              });
    };

    const addOldBottleInrackConsomme = async (bottlesDrink: Bottle[]) => {
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            ...authUser.userDocument,
            bottlesDrink,
        });
        if (error) {
            toast.error(error.message, { autoClose: 3000 });
            return;
        }
    };

    return {
        updateRacks,
        addNewBottleInrack,
        deleteBottle,
        deletedBottleDrink,
        deletedBottleFavoris,
        consommeBottle,
        addFavorisBottle,
    };
};

export default useUpdateRacks;
