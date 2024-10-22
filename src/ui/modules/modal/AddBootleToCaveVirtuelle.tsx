import { useForm } from "react-hook-form";
import { Bottle } from "../../../types/RacksTypes";
import { useEffect } from "react";
import { X } from "lucide-react";
import { nanoid } from "nanoid";
import useUpdateRacks from "../../../hooks/useUpdateRacks";

type Props = {
    handleClickModal: () => void;
};

const AddBootleToCaveVirtuelle = ({ handleClickModal }: Props) => {
    const { addFavorisBottle } = useUpdateRacks();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<Bottle>();

    const onSubmit = (data: Bottle) => {
        const newBootleForLater: Bottle = {
            id: nanoid(),
            type: data.type,
            couleur: data.couleur,
            gout: "",
            millesime: data.millesime,
            appellation: data.appellation,
            exploitation: data.exploitation,
            accords: "",
            rackId: "favoris",
            index: 1,
            cuvee: null,
            pays: null,
            prix: null,
            achat: null,
            drink: "",
            favoris: false,
        };
        addFavorisBottle(newBootleForLater);
        handleClickModal();
    };

    return (
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-fond z-40"></div>
            <div className="absolute top-10 left-1/2 overflow-auto -translate-x-1/2 w-72 bg-vin200 text-center shadow-md rounded-xl py-4 z-50">
                <div
                    className="absolute top-2 right-2 h-6 w-6 z-10 cursor-pointer"
                    onClick={() => handleClickModal()}
                >
                    <X />
                </div>
                <form
                    className="flex flex-col gap-4 px-4 mt-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">Type de vin *</p>
                        <select
                            {...register("type", { required: true })}
                            className="w-full p-1 rounded"
                        >
                            <option value=""></option>
                            <option value="vin">Vin</option>
                            <option value="champagne">Champagne</option>
                            <option value="mousseux">Mousseux</option>
                            <option value="cidre">Cidre</option>
                            <option value="biere">Bière</option>
                            <option value="spiritueux">spiritueux</option>
                        </select>
                        {errors.type && <span>Type de vin est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            Couleur du vin ou bière *
                        </p>
                        <select
                            {...register("couleur", { required: true })}
                            className="w-full p-1 rounded"
                        >
                            <option value=""></option>
                            <option value="rouge">Rouge</option>
                            <option value="blanc">Blanc</option>
                            <option value="rose">Rosé</option>
                            <option value="blonde">Blonde</option>
                            <option value="brune">Brune</option>
                            <option value="ambree">Ambrée</option>
                            <option value="blanche">Blanche</option>
                            <option value="pétillant">Pétillant</option>
                        </select>
                        {errors.couleur && <span>Ce champ est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">Millesime</p>
                        <input
                            type="number"
                            {...register("millesime")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            Appellation (Bordeaux ...)
                        </p>
                        <input
                            {...register("appellation", { required: true })}
                            className="w-full p-1 rounded"
                        />
                        {errors.couleur && <span>Ce champ est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            Nom exploitation
                        </p>
                        <input
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
                    <p className="text-fond text-xs">* Champs obligatoire</p>
                </form>
            </div>
        </>
    );
};

export default AddBootleToCaveVirtuelle;
