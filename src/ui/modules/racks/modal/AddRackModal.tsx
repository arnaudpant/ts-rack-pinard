import { Bottle, Rack } from "../../../../types/RacksTypes";
import { useAuth } from "../../../../context/AuthUserContext";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import { FirestoreUpdateDocument } from "../../../../api/Firestore";
import { toast } from "react-toastify";

type FormValues = {
    rackName: string,
    columns: number,
    rows: number
}

type Props = {
    handleClick: () => void
}



const AddRackModal = ({handleClick}: Props) => {

    const { authUser } = useAuth()
    const { register, handleSubmit, formState:{errors} } = useForm<FormValues>()

    const newRack: Rack = {
        idrack: uuidv4(),
        rackName: '',
        columns: 0,
        rows: 0,
        bottles: []
    }

    const bottleEmpty: Bottle = {
        id: "",
        millesime: null,
        type: "vide" ,
        couleur: "",
        gout: null,
        pays: null,
        appellation: null,
        exploitation: null,
        cuvee: null,
        accords: [],
        prix: null,
        achat: null,
        rack: ""
    }

    const addNewRackUserDocument = async (racks: Rack[]) => {
        const {error} = await FirestoreUpdateDocument(
            "users", authUser.uid, {...authUser.userDocument, racks: racks}
        )
        if (error) {
            toast.error(error.message)
            handleClick()
            return
        }
        toast.success('Rack vide ajouté')
    }



    const onSubmit = (data: FormValues) => {
        const calculNumberOfBottle: number = data.columns * data.rows
        // AJOUT X BOUTEILLES VIDES
        let arrBottlesVide: typeof bottleEmpty[] | [] = []
        for (let i = 0; i < calculNumberOfBottle; i++) {
            const bottleEmptyWithNewId = {...bottleEmpty, id: uuidv4()}
            arrBottlesVide = [...arrBottlesVide, bottleEmptyWithNewId]
        }

        // AJOUT RACKS AVEC BOUTEILLES VIDE + INFOS
        const rackWithBottlesEmpty = {...newRack, 
            rackName: data.rackName,
            columns: data.columns,
            rows: data.rows,
            bottles: arrBottlesVide
        }

        if(authUser.userDocument.racks.length === 0) {
            addNewRackUserDocument([rackWithBottlesEmpty])
        } else {
            const oldAndNewRacks = authUser.userDocument.racks
            const racks = [...oldAndNewRacks, rackWithBottlesEmpty]
            addNewRackUserDocument(racks)
        }


        // FERMETURE DU MODAL
        handleClick()
    }

    return createPortal(
        <div className="absolute w-72 bg-vin100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center shadow-xl">
            <h2 className="text-xl my-4">Ajouter un rack</h2>

            <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="rackName">Entrez un nom</label>
                <input type="text" id="rackName" {...register("rackName", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Donnez un nom au rack" className="p-2 rounded-md mb-2 bg-fond text-sm" />

                <label htmlFor="colonnes">Entrez le nombre de colonnes (&gt;11)</label>
                <input type="number" id="columns" {...register("columns", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Nombre de colonnes" className="p-2 rounded-md mb-2 bg-fond text-sm" />
                {
                    errors.columns && <p className="text-xs text-vin_rouge text-center">{errors.columns.message}</p>
                }

                <label htmlFor="rangees">Entrez le nombre de rangées</label>
                <input type="number" id="rows" {...register("rows", { required: { value: true, message: "Ce champ est requis" } })} placeholder="Nombre de rangées" className="p-2 rounded-md mb-2 bg-fond text-sm" />
                {
                    errors.rows && <p className="text-xs text-vin_rouge text-center">{errors.rows.message}</p>
                }

                <button type="submit" className="px-4 py-1 bg-fond rounded-full my-4 text-vin hover:bg-vin600 hover:text-fond">AJOUTER</button>
            </form>

        </div>,
        document.body
    );
};

export default AddRackModal;