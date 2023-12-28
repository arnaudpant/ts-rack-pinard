import { Rack } from "../types/RacksTypes"
import { useAuth } from "../context/AuthUserContext"
import { FirestoreUpdateDocument } from "../api/Firestore"
import { toast } from "react-toastify";




export const addNewRackUserDocument = async (racks: Rack[]) => {
    const { authUser } = useAuth()
    const {error} = await FirestoreUpdateDocument(
        "users", authUser.uid, {...authUser.userDocument, racks: racks}
    )
    if (error) {
        toast.error(error.message)
        return
    }
    toast.success('Rack vide ajouté')
}