import { Rack } from "../../../../types/RacksTypes";
// import { useAuth } from "../../../../context/AuthUserContext";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';

type FormValues = {
    rackName: string,
    columns: number,
    rows: number
}



const AddRackModal = () => {

    // const { authUser } = useAuth()
    const { register, handleSubmit } = useForm<FormValues>()

    const newRack: Rack = {
        idrack: uuidv4(),
        rackName: '',
        columns: 0,
        rows: 0,
        bottles: []
    }

    const onSubmit = (data: FormValues) => {
        console.log(data)
        const rackDemo = {...newRack, data}
        console.log('rackDemo', rackDemo)
    }

    return createPortal(
        <div className="absolute w-72 bg-vin100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center shadow-xl">
            <h2 className="text-xl my-4">Ajouter un rack</h2>

            <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="rackName">Entrez un nom</label>
                <input type="text" id="rackName" {...register("rackName", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Donnez un nom au rack" className="p-2 rounded-md mb-2 bg-fond text-sm" />

                <label htmlFor="colonnes">Entrez le nombre de colonnes</label>
                <input type="number" id="columns" {...register("columns", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Nombre de colonnes" className="p-2 rounded-md mb-2 bg-fond text-sm" />

                <label htmlFor="rangees">Entrez le nombre de rangées</label>
                <input type="number" id="rows" {...register("rows", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Nombre de rangées" className="p-2 rounded-md mb-2 bg-fond text-sm" />

                <button type="submit" className="px-4 py-1 bg-fond rounded-full my-4 text-vin hover:bg-vin600 hover:text-fond">AJOUTER</button>
            </form>

        </div>,
        document.body
    );
};

export default AddRackModal;