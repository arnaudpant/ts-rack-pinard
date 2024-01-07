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

    const deleteBottle = (bottleEmpty: Bottle) => {
        const deleted: boolean = true
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
            toast.error(error.message);
            return;
        }
        deleted === true ? toast.success("Bouteille supprimée de votre rack") :
        toast.success("Bouteille ajoutée à votre rack")
    };

    return {
        updateRacks,
        addNewBottleInrack,
        deleteBottle,
    };
};

export default useUpdateRacks;
