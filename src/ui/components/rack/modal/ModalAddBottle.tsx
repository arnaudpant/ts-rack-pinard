import { SubmitHandler, useForm } from "react-hook-form";
import { Bottle } from "../../../../types/RacksTypes";

type Props = {
    bottle: Bottle;
    setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAddBottle = ({ bottle, setModalShow }: Props) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
    } = useForm<Bottle>();

    const onSubmit = (data: Bottle) => {
        console.log(data);
        setModalShow(false);
    };

    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-vin100 flex flex-col items-center justify-center">
            <div className="w-72 bg-fond text-center shadow-md rounded-xl py-4">
                <form
                    className="flex flex-col gap-4 px-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            Type de vin *
                        </p>
                        <select
                            {...register("type", { required: true })}
                            className="w-full p-1 rounded"
                        >
                            <option value="vin">Vin</option>
                            <option value="champagne">Champagne</option>
                            <option value="petillant">Pétillant</option>
                            <option value="cidre">Pétillant</option>
                            <option value="biere">Bière</option>
                            <option value="spiritueux">spiritueux</option>
                        </select>
                        {errors.type && <span>Type de vin est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            Couleur du vin ou bière *
                        </p>
                        <select
                            {...register("couleur", { required: true })}
                            className="w-full p-1 rounded"
                        >
                            <option value="rouge">Rouge</option>
                            <option value="blanc">Blanc</option>
                            <option value="rose">Rosé</option>
                            <option value="blonde">Blonde</option>
                            <option value="brune">Brune</option>
                            <option value="ambree">Ambrée</option>
                            <option value="blanche">Blanche</option>
                            <option value=""></option>
                        </select>
                        {errors.couleur && <span>Ce champ est requis</span>}
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            Goût du vin ou cidre
                        </p>
                        <select
                            {...register("gout")}
                            className="w-full p-1 rounded"
                        >
                            <option value="sec">Sec</option>
                            <option value="demi-sec">Demi sec</option>
                            <option value="sucre">Sucré</option>
                            <option value="doux">Doux</option>
                            <option value="brut">Brut</option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">Millesime</p>
                        <input
                            type="number"
                            {...register("millesime")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">Appellation</p>
                        <input
                            {...register("appellation")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            Nom exploitation
                        </p>
                        <input
                            {...register("exploitation")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            Cuvée spéciale ?
                        </p>
                        <input
                            {...register("cuvee")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">
                            A consommer avec ?{" "}
                            <span className="text-xs">
                                (séparer par une , )
                            </span>
                        </p>
                        <input
                            {...register("accords")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">Prix d'achat</p>
                        <input
                            type="number"
                            {...register("prix")}
                            className="w-full p-1 rounded"
                        />
                    </div>

                    <div className="w-full text-left">
                        <p className="text-vin200 pb-1 text-sm">Date d'achat</p>
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
                    <p className="text-vin100 text-xs">* Champs obligatoire</p>
                </form>
            </div>
        </div>
    );
};

export default ModalAddBottle;
