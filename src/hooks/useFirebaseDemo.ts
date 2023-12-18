/** FIREBASE */
import { db } from "../firebase/firebase.config";
import { doc, onSnapshot } from "firebase/firestore";

export const getDemoRack= async () => {

        // Recuperation des données de Firestore
        const documentRef = doc(db, "demo", "rackDemo")
        console.log(documentRef)

        // Ecouteur onSnapshot pour recuperer en temps reel les modifs dans db firestore
        onSnapshot(documentRef, async (doc) => {
            if (doc.exists()) {
                //compactUser.userDocument = doc.data() as UserDocument
            }
            // setAuthUser((prevAuthUser) => (
            //     { ...prevAuthUser, ...compactUser }
            //))
            // Fin du chargement
            // setAuthUserIsLoading(false)
        })
    
}