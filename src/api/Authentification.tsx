import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { FirebaseError } from "firebase/app"

/**
 * CREATION D'UN COMPTE
 */
export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return {
            data: userCredential.user
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        //TODO: Formater les erreurs
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}

/**
 * CONNEXION A UN COMPTE EXISTANT
 */
export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return {
            data: userCredential.user
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        //TODO: Formater les erreurs
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}

/**
 * DECONNEXION D'UN COMPTE
 */
export const firebaseSignOutUser = async () => {
    try {
        await signOut(auth)
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        //TODO: Formater les erreurs
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}

/**
 * RECUPERATION D'UN EMAIL
 */
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email)
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        //TODO: Formater les erreurs
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}