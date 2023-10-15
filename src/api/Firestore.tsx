import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { FirebaseError } from "firebase/app";

export const FirestoreCreateDocument = async (collectionName: string, documentId: string, data: object) => {
    try {
        const documentRef = doc(db, collectionName, documentId);
        await setDoc(documentRef, data);
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

export const FirestoreUpdateDocument = async (collectionName: string, documentId: string, data: object) => {
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