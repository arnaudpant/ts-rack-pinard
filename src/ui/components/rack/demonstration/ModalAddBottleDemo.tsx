import { useForm } from "react-hook-form";
import { Bottle} from "../../../../types/RacksTypes";
import { X } from "lucide-react";



type Props = {
    bottle: Bottle;
    handleClick: () => void;
};

const ModalAddBottleDemo = ({ bottle, handleClick }: Props) => {



    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<Bottle>();

    const onSubmit = (data: Bottle) => {
        const newBootle: Bottle = {
            ...bottle,
            type: data.type,
            couleur: data.couleur,
            gout: data.gout,
            millesime: data.millesime,
            appellation: data.appellation,
            exploitation: data.exploitation,
            cuvee: data.cuvee,
            prix: data.prix,
            achat: data.achat,
        };
        console.log(newBootle)
        handleClick();
    };


    return (
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-vin50 opacity-30"></div>
            <div className="absolute top-10 left-1/2 overflow-auto -translate-x-1/2 w-72 bg-vin200 text-center shadow-md rounded-xl py-4">
                <div
                    className="absolute top-2 right-2 h-6 w-6 z-10 cursor-pointer"
                    onClick={() => handleClick()}
                >
                    <X />
                </div>
                <form
                    className="flex flex-col gap-4 px-4 mt-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">Type de vin</p>
                        <select
                            {...register("type", { required: true })}
                            className="w-full p-1 rounded"
                        >
                            <option value=""></option>
                            <option value="vin">Vin</option>
                            <option value="champagne">Champagne</option>
                            <option value="mousseux">Mousseux</option>
                            <option value="cidre">Pétillant</option>
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
                            <option value="petillant">Pétillant</option>
                        </select>
                        {errors.couleur && <span>Ce champ est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            Goût du vin ou cidre
                        </p>
                        <select
                            {...register("gout")}
                            className="w-full p-1 rounded"
                        >
                            <option value=""></option>
                            <option value="sec">Sec</option>
                            <option value="demi-sec">Demi sec</option>
                            <option value="sucre">Sucré</option>
                            <option value="doux">Doux</option>
                            <option value="brut">Brut</option>
                        </select>
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

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            Cuvée spéciale ?
                        </p>
                        <input
                            {...register("cuvee")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    {/* <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">
                            A consommer avec ?{" "}
                            <span className="text-xs">
                                (séparer par une , )
                            </span>
                        </p>
                        <input
                            {...register("accords")}
                            className="w-full p-1 rounded"
                        />
                    </div> */}

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">Prix d'achat</p>
                        <input
                            type="number"
                            {...register("prix")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-fond pb-1 text-sm">Date d'achat</p>
                        <input
                            type="date"
                            {...register("achat")}
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

export default ModalAddBottleDemo;
