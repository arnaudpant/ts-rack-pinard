/** HOOKS */
import { useEffect, useState } from "react";
/** TYPE */
import { UserDocument, UserInterface } from "@/types/User";
/** FIREBASE */
import { auth, db } from "../firebase/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";


const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true)

    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL
    })

    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user

            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument
                }
                setAuthUser((prevAuthUser) => (
                    {...prevAuthUser, ...compactUser}
                ))
                setAuthUserIsLoading(false)
            })
        }
    }

    const authSateChanged = async (authState: UserInterface | User | null) => {
        // user non connecté
        if (!authState) {
            setAuthUser(null)
            setAuthUserIsLoading(false)
            return
        }
        // user connecté
        setAuthUserIsLoading(true)
        const formatedUser = formatAuthUser(authState)

        await getUserDocument(formatedUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authSateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        authUserIsLoading
    }
};

export default useFirebaseAuth;