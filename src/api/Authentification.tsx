/** FIREBASE */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { FirebaseError } from "firebase/app"
import { getFirebaseErrorMessage } from "../utils/getFirebaseErrorMessage"

/**
 * CREATION D'UN NOUVEAU COMPTE
 * Creation du user
 */
export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return {
            data: userCredential.user
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage("createUserWithEmailAndPassword", firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}

/** Envoi d'un mail de validation */
export const sendEmailConfirmation = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser)
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
    } else {
        return {
            error: {
                code: "umknow",
                message: "User non connecté"
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
        const errorMessage = getFirebaseErrorMessage("signInWithEmailAndPassword", firebaseError.code)

        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
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
        const errorMessage = getFirebaseErrorMessage("signOut", firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
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
        const errorMessage = getFirebaseErrorMessage("sendPasswordResetEmail", firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}