// import { Rack } from "../../../../types/RacksTypes";
// import { useAuth } from "../../../../context/AuthUserContext";
import { createPortal } from "react-dom";



const AddRackModal = () => {

    // const { authUser } = useAuth()

    // const newRack: Rack = {
    //     idrack: '',
    //     rackName: '',
    //     columns: 0,
    //     rows: 0,
    //     bottles: []
    // }

    // const handleSubmit = () => {

    // }

    return createPortal(
        <div className="absolute w-72 bg-vin100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center shadow-xl">
            <h2 className="text-xl my-4">Ajouter un rack</h2>
            <form className="flex flex-col gap-1">
                <label htmlFor="rackName">Entrez un nom</label>
                <input type="text" id="rackName" placeholder="Donnez un nom au rack" className="p-2 rounded-md mb-2 bg-fond text-sm" />
                <label htmlFor="colonnes">Entrez le nombre de colonnes</label>
                <input type="number" id="colonnes" placeholder="Nombre de colonnes" className="p-2 rounded-md mb-2 bg-fond text-sm" />
                <label htmlFor="rangees">Entrez le nombre de rangées</label>
                <input type="number" id="rangees" placeholder="Nombre de rangées" className="p-2 rounded-md mb-2 bg-fond text-sm" />
                <button type="submit" className="px-4 py-1 bg-fond rounded-full my-4 text-vin hover:bg-vin600 hover:text-fond">AJOUTER</button>
            </form>
        </div>,
        document.body
    );
};

export default AddRackModal;