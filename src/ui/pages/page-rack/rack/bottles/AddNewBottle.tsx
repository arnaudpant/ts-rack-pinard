import { useForm } from "react-hook-form";
import { Bottle, Rack } from "../../../../../types/RacksTypes";
import useUpdateRacks from "../../../../../hooks/useUpdateRacks";
import clsx from "clsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../../../../components/ui/input";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../context/AuthUserContext";

const AddNewBottle = () => {
    const { authUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const bottleEmpty = location.state as Bottle;
    const { updateRacks } = useUpdateRacks();
    const [lastAddedBottle, setLastAddedBottle] = useState<Bottle | null>(null);
    const [existingBottles, setExistingBottles] = useState<Bottle[]>([]);

    const {
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm<Bottle>();

    useEffect(() => {
        const storedBottle = localStorage.getItem("lastAddedBottle");
        if (storedBottle) {
            setLastAddedBottle(JSON.parse(storedBottle));
        }
    }, []);

    useEffect(() => {
        if (authUser?.userDocument) {
            const allBottles: Bottle[] = authUser.userDocument.racks.flatMap(
                (rack: Rack) => rack.bottles
            );
            const uniqueBottles = allBottles.filter(
                (bottle, index, self) =>
                    bottle.nom !== "" &&
                    index ===
                        self.findIndex(
                            (t) =>
                                t.nom === bottle.nom &&
                                t.appellation === bottle.appellation &&
                                t.type === bottle.type &&
                                t.couleur === bottle.couleur
                        )
            );
            setExistingBottles(uniqueBottles);
        }
    }, [authUser]);

    const onSubmit = (data: Bottle) => {
        const newBottle: Bottle = {
            ...bottleEmpty,
            nom: data.nom,
            millesime: data.millesime,
            appellation: data.appellation,
            exploitation: data.exploitation,
            cepage: data.cepage,
            pays: data.pays,
            type: data.type,
            couleur: data.couleur,
            saveur: data.saveur,
            corps: data.corps,
            potentiel: data.potentiel,
            status: data.status,
            degre: data.degre,
            accords: data.accords,
            prix: data.prix,
            achat: data.achat,
            drink: null,
            favoris: false,
        };
        updateRacks(newBottle);
        setLastAddedBottle(newBottle);
        localStorage.setItem("lastAddedBottle", JSON.stringify(newBottle));
        navigate(`/rack/${newBottle.rackId}`, { state: bottleEmpty.rackId });
    };

    const duplicateLastBottle = () => {
        if (lastAddedBottle) {
            reset(lastAddedBottle);
        }
    };

    const handleExistingBottleSelect = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedBottle = existingBottles.find(
            (bottle) => bottle.id === event.target.value
        );
        if (selectedBottle) {
            reset(selectedBottle);
        }
    };

    return (
        <div className="flex justify-center text-center py-4">
            <form
                className="flex flex-col gap-4 px-4 mt-3 w-[300px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* DUPLICATE */}
                <button
                    type="button"
                    onClick={duplicateLastBottle}
                    disabled={!lastAddedBottle}
                    className={clsx(
                        "w-full bg-vin text-fond rounded-full py-2 mb-4",
                        !lastAddedBottle && "opacity-50 cursor-not-allowed"
                    )}
                >
                    Dupliquer la dernière bouteille
                </button>
                {/* SELECT BOTTLE */}
                <div className="w-full text-left mb-6">
                    <p className="pb-1 text-sm">
                        Sélectionner une bouteille existante
                    </p>
                    <select
                        onChange={handleExistingBottleSelect}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                        data-testid="select-bottle"
                    >
                        <option value="">Sélectionner une bouteille</option>
                        {existingBottles.map((bottle) => (
                            <option
                                key={bottle.id}
                                value={bottle.id}
                                data-testid="select-option"
                            >
                                {`${bottle.nom}`}
                            </option>
                        ))}
                    </select>
                </div>
                {/* NOM */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom de la bouteille *</p>
                    <Input
                        {...register("nom", { required: true })}
                        className="w-full p-1 rounded"
                        data-testid="name-bottle"
                    />
                    {errors.type && <span>Le nom est requis</span>}
                </div>
                {/* MILLESIME */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Millesime</p>
                    <Input
                        type="number"
                        {...register("millesime")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* APPELATION */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Appellation (Bordeaux ...)</p>
                    <Input
                        {...register("appellation", { required: true })}
                        className="w-full p-1 rounded"
                    />
                    {errors.couleur && <span>Ce champ est requis</span>}
                </div>
                {/* EXPLOITATION */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom exploitation</p>
                    <Input
                        {...register("exploitation")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* CEPAGE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Cépage</p>
                    <Input
                        {...register("cepage")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* PAYS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Pays</p>
                    <Input
                        {...register("pays")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* TYPE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Type de boisson *</p>
                    <select
                        {...register("type", { required: true })}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="vin">Vin</option>
                        <option value="champagne">Champagne</option>
                        <option value="vin effervescent">Vin pétillent</option>
                        <option value="cidre">Cidre</option>
                        <option value="biere">Bière</option>
                        <option value="aperitif">Apéritif</option>
                        <option value="digestif">Digestif</option>
                    </select>
                    {errors.type && <span>Type de boisson est requis</span>}
                </div>
                {/* COULEUR */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Couleur du vin ou bière</p>
                    <select
                        {...register("couleur")}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="rouge">Rouge</option>
                        <option value="blanc">Blanc</option>
                        <option value="rose">Rosé</option>
                        <option value="blonde">Blonde</option>
                        <option value="brune">Brune</option>
                        <option value="ambree">Ambrée</option>
                        <option value="blanche">Blanche</option>
                    </select>
                </div>
                {/* SAVEUR */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Goût du vin ou cidre</p>
                    <select
                        {...register("saveur")}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="sec">Sec</option>
                        <option value="demi-sec">Demi sec</option>
                        <option value="sucre">Sucré</option>
                        <option value="doux">Doux</option>
                        <option value="brut">Brut</option>
                        <option value="fruite">Fruité</option>
                        <option value="floral">Floral</option>
                    </select>
                </div>
                {/* CORPS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Corps</p>
                    <select
                        {...register("corps")}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="leger">Léger</option>
                        <option value="moyen">Moyen</option>
                        <option value="corse">Corsé</option>
                        <option value="plein">Plein</option>
                    </select>
                </div>
                {/* POTENTIEL */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Potentiel</p>
                    <select
                        {...register("potentiel")}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="leger">Court -5 ans</option>
                        <option value="moyen">Moyen 6 à 15 ans</option>
                        <option value="corse">Long +16 ans</option>
                    </select>
                </div>
                {/* STATUS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Status</p>
                    <select
                        {...register("status")}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="A boire">A boire</option>
                        <option value="A maturation">A Maturation</option>
                        <option value="A garder">A garder</option>
                    </select>
                </div>
                {/* DEGRE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Degré d'alcool</p>
                    <Input
                        type="decimal"
                        {...register("degre")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* ACCORDS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Accords</p>
                    <Input
                        {...register("accords")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* PRIX */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Prix d'achat</p>
                    <Input
                        type="decimal"
                        {...register("prix")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* DATE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Date d'achat</p>
                    <Input
                        type="date"
                        {...register("achat")}
                        className="w-full p-1 rounded"
                    />
                </div>

                <button
                    type="submit"
                    disabled={bottleEmpty.rackId === "314"}
                    className={clsx(
                        bottleEmpty.rackId === "314" && "cursor-not-allowed",
                        "w-full bg-vin text-fond rounded-full py-2 mt-4"
                    )}
                >
                    Ajouter la bouteille
                </button>
                <NavLink
                    to={clsx(
                        bottleEmpty.rackId === "314"
                            ? "/demonstration"
                            : `/rack/${bottleEmpty.rackId}`
                    )}
                    state={bottleEmpty.rackId}
                    className="px-4 py-1 bg-vin/30 rounded-full mt-2 mb-6 text-vin hover:bg-vin600/80 hover:text-fond text-center"
                >
                    ANNULER
                </NavLink>

                <p className="text-vin300 text-xs">* Champs obligatoire</p>
            </form>
        </div>
    );
};

export default AddNewBottle;
