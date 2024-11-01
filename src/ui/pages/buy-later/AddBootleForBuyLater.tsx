import { Bottle } from "../../../types/RacksTypes";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import useUpdateRacks from "../../../hooks/useUpdateRacks";
import AddBootleForBuyLaterView from "./AddBootleForBuyLaterView";
import { useNavigate } from "react-router-dom";

const AddBootleForBuyLater = () => {
    const { addBottleForBuyLater } = useUpdateRacks();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const onSubmit = (data: Bottle) => {
        const newBootleForLater: Bottle = {
            id: nanoid(),
            nom: data.nom,
            millesime: data.millesime,
            appellation: data.appellation,
            exploitation: data.exploitation,
            cepage: null,
            pays: null,
            type: data.type,
            couleur: data.couleur,
            saveur: null,
            corps: null,
            potentiel: null,
            status: null,
            degre: null,
            accords: null,
            prix: null,
            achat: null,
            rackId: "favoris",
            index: 1,
            drink: null,
            favoris: false,
        };
        addBottleForBuyLater(newBootleForLater);
        navigate("/cave-virtuelle");
    };

    return (
        // <div className="container mx-auto flex flex-col items-center p-4 min-h-[calc(100vh-232px)]">
        //     <form
        //         className="flex flex-col gap-4 px-4 mt-3 w-[300px]"
        //         onSubmit={handleSubmit(onSubmit)}
        //     >
        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">
        //                 Nom de la bouteille
        //             </p>
        //             <input
        //                 {...register("nom", { required: true })}
        //                 className="w-full p-1 rounded"
        //             />
        //             {errors.couleur && <span>Ce champ est requis</span>}
        //         </div>
        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">Type de vin *</p>
        //             <select
        //                 {...register("type", { required: true })}
        //                 className="w-full p-1 rounded"
        //             >
        //                 <option value=""></option>
        //                 <option value="vin">Vin</option>
        //                 <option value="champagne">Champagne</option>
        //                 <option value="effervescent">Pétillant</option>
        //                 <option value="cidre">Cidre</option>
        //                 <option value="biere">Bière</option>
        //                 <option value="aperitif">Apéritif</option>
        //                 <option value="digestif">Digestif</option>
        //             </select>
        //             {errors.type && <span>Type de vin est requis</span>}
        //         </div>

        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">
        //                 Couleur du vin ou bière *
        //             </p>
        //             <select
        //                 {...register("couleur", { required: true })}
        //                 className="w-full p-1 rounded"
        //             >
        //                 <option value=""></option>
        //                 <option value="rouge">Rouge</option>
        //                 <option value="blanc">Blanc</option>
        //                 <option value="rose">Rosé</option>
        //                 <option value="blonde">Blonde</option>
        //                 <option value="brune">Brune</option>
        //                 <option value="ambree">Ambrée</option>
        //                 <option value="blanche">Blanche</option>
        //             </select>
        //             {errors.couleur && <span>Ce champ est requis</span>}
        //         </div>

        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">Millesime</p>
        //             <input
        //                 type="number"
        //                 {...register("millesime")}
        //                 className="w-full p-1 rounded"
        //             />
        //         </div>

        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">Appellation</p>
        //             <input
        //                 {...register("appellation", { required: true })}
        //                 className="w-full p-1 rounded"
        //             />
        //             {errors.couleur && <span>Ce champ est requis</span>}
        //         </div>

        //         <div className="w-full text-left">
        //             <p className="text-fond pb-1 text-sm">Nom exploitation</p>
        //             <input
        //                 {...register("exploitation")}
        //                 className="w-full p-1 rounded"
        //             />
        //         </div>

        //         <button
        //             type="submit"
        //             className="w-full bg-vin text-fond rounded-full py-2 mt-4"
        //         >
        //             Ajouter la bouteille
        //         </button>
        //         <p className="text-fond text-xs">* Champs obligatoire</p>
        //     </form>
        // </div>
        <AddBootleForBuyLaterView onSubmit={onSubmit} />
    );
};

export default AddBootleForBuyLater;
