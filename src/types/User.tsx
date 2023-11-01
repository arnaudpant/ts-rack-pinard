/** FIREBASE */
import { Timestamp } from "firebase/firestore"

// Données primaires de Firebase
export interface UserInterface {
    // Données primaires
    uid: string,
    email: string | null,
    displayName: string | null,
    emailVerified: boolean,
    photoURL: string | null,
    // Données de la collection de la base de donnée
    userDocument?: UserDocument 
}

export interface UserDocument {
    uid: string,
    email: string,
    creation_date: Timestamp,
    onBoardingisCompleted: boolean,
    login: string
    // Champs Ajouter un champ ds Firestore
}