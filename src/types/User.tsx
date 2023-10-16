import { Timestamp } from "firebase/firestore"

export interface UserInterface {
    uid: string,
    email: string | null,
    displayName: string | null,
    emailVerified: boolean,
    photoURL: string | null,
    userDocument?: UserDocument
}

export interface UserDocument {
    uid: string,
    email: string,
    login : string,
    creation_date: Timestamp,
    // Champs Ajouter un champ ds Firestore
}