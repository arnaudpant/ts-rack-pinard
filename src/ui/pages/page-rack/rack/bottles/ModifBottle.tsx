import { useForm } from "react-hook-form";
import { Bottle } from "../../../../../types/RacksTypes";
import useUpdateRacks from "../../../../../hooks/useUpdateRacks";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../../../../components/ui/input";

const ModifBottle = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bottleToModif = location.state as Bottle;
    const { updateRacks } = useUpdateRacks();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<Bottle>();

    const onSubmit = (data: Bottle) => {
        const newBootle: Bottle = {
            ...bottleToModif,
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
        };
        updateRacks(newBootle);
        navigate(`/rack/${bottleToModif.rackId}`, {
            state: bottleToModif.rackId,
        });
    };

    return (
        <div className="flex justify-center text-center py-4">
            <form
                className="flex flex-col gap-4 px-4 mt-3 w-[300px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* NOM */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom de la bouteille *</p>
                    <Input
                        {...register("nom", { required: true })}
                        defaultValue={bottleToModif.nom}
                        className="w-full p-1 rounded"
                    />
                    {errors.type && <span>Le nom est requis</span>}
                </div>
                {/* MILLESIME */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Millesime</p>
                    <Input
                        type="number"
                        {...register("millesime")}
                        defaultValue={bottleToModif.millesime ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* APPELATION */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Appellation (Bordeaux ...)</p>
                    <Input
                        {...register("appellation", { required: true })}
                        defaultValue={bottleToModif.appellation ?? ""}
                        className="w-full p-1 rounded"
                    />
                    {errors.couleur && <span>Ce champ est requis</span>}
                </div>
                {/* EXPLOITATION */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom exploitation</p>
                    <Input
                        {...register("exploitation")}
                        defaultValue={bottleToModif.exploitation ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* CEPAGE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Cépage</p>
                    <Input
                        {...register("cepage")}
                        defaultValue={bottleToModif.cepage ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* PAYS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Pays</p>
                    <Input
                        {...register("pays")}
                        defaultValue={bottleToModif.pays ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* TYPE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Type de boisson *</p>
                    <select
                        {...register("type", { required: true })}
                        defaultValue={bottleToModif.type ?? ""}
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
                    <p className="pb-1 text-sm">Couleur du vin ou bière *</p>
                    <select
                        {...register("couleur")}
                        defaultValue={bottleToModif.couleur ?? ""}
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
                        defaultValue={bottleToModif.saveur ?? ""}
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
                        defaultValue={bottleToModif.corps ?? ""}
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
                        defaultValue={bottleToModif.potentiel ?? ""}
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
                        defaultValue={bottleToModif.status ?? ""}
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
                        defaultValue={bottleToModif.degre ?? ""}
                        {...register("degre")}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* ACCORDS */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Accords</p>
                    <Input
                        {...register("accords")}
                        defaultValue={bottleToModif.accords ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* PRIX */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Prix d'achat</p>
                    <Input
                        type="decimal"
                        {...register("prix")}
                        defaultValue={bottleToModif.prix ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>
                {/* DATE */}
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Date d'achat</p>
                    <Input
                        type="date"
                        {...register("achat")}
                        defaultValue={bottleToModif.achat ?? ""}
                        className="w-full p-1 rounded"
                    />
                </div>

                <button
                    type="submit"
                    disabled={bottleToModif.rackId === "314"}
                    className="w-full bg-vin text-fond rounded-full py-2 mt-4"
                >
                    Modifier la bouteille
                </button>
                <NavLink
                    to={`/rack/${bottleToModif.rackId}`}
                    state={bottleToModif.rackId}
                    className="px-4 py-1 bg-vin/30 rounded-full mt-2 mb-6 text-vin hover:bg-vin600/80 hover:text-fond text-center"
                >
                    ANNULER
                </NavLink>

                <p className="text-vin300 text-xs">* Champs obligatoire</p>
            </form>
        </div>
    );
};

export default ModifBottle;
