/** FIREBASE */
import { Timestamp } from "firebase/firestore"
import { Bottle, Rack } from "./RacksTypes"

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
    photoURL: string
    uid: string,
    email: string,
    creation_date?: Timestamp,
    onBoardingisCompleted: boolean,
    login: string,
    racks: Rack[],
    bottlesFavoris: Bottle[],
    bottlesDrink: Bottle[]
    // Champs Ajouter un champ ds Firestore
}