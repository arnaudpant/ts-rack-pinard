import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { FirebaseError } from "firebase/app";


export const FirestoreUpdateDocument = async (collectionName: string, documentId: string, data: any) => {
    try {
        const documentRef = doc(db, collectionName, documentId);
        await updateDoc(documentRef, data);
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        return {  
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}