import { Bottle } from "@/types/RacksTypes";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";

type Props = {
    onSubmit: (data: Bottle) => void;
};

const AddBootleForBuyLaterView = ({onSubmit} : Props) => {
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<Bottle>();

    return (
        <div className="container mx-auto flex flex-col items-center p-4 min-h-[calc(100vh-232px)]">
            <form
                className="flex flex-col gap-4 px-4 mt-3 w-[300px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom de la bouteille *</p>
                    <Input
                        {...register("nom", { required: true })}
                        className="w-full p-1 rounded"
                    />
                    {errors.couleur && <span>Ce champ est requis</span>}
                </div>
                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Type de vin *</p>
                    <select
                        {...register("type", { required: true })}
                        className="w-full p-1 rounded border border-bouteille_biere/20 h-10"
                    >
                        <option value=""></option>
                        <option value="vin">Vin</option>
                        <option value="champagne">Champagne</option>
                        <option value="effervescent">Pétillant</option>
                        <option value="cidre">Cidre</option>
                        <option value="biere">Bière</option>
                        <option value="aperitif">Apéritif</option>
                        <option value="digestif">Digestif</option>
                    </select>
                    {errors.type && <span>Type de vin est requis</span>}
                </div>

                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Couleur du vin ou bière *</p>
                    <select
                        {...register("couleur", { required: true })}
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
                    {errors.couleur && <span>Ce champ est requis</span>}
                </div>

                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Millesime</p>
                    <Input
                        type="number"
                        {...register("millesime")}
                        className="w-full p-1 rounded"
                    />
                </div>

                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Appellation</p>
                    <Input
                        {...register("appellation", { required: true })}
                        className="w-full p-1 rounded"
                    />
                    {errors.couleur && <span>Ce champ est requis</span>}
                </div>

                <div className="w-full text-left">
                    <p className="pb-1 text-sm">Nom exploitation</p>
                    <Input
                        {...register("exploitation")}
                        className="w-full p-1 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-vin text-fond rounded-full py-2 mt-4"
                >
                    Ajouter la bouteille
                </button>
                <Link
                    to="/cave-virtuelle"
                    className="px-4 py-1 bg-vin/30 rounded-full mt-2 mb-6 text-vin hover:bg-vin600/80 hover:text-fond text-center"
                >
                    ANNULER
                </Link>
                <p className="text-vin text-xs">* Champs obligatoire</p>
            </form>
        </div>
    );
};

export default AddBootleForBuyLaterView;
