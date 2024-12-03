import { useEffect, useState } from "react";
import { UserDocument, UserInterface } from "@/types/User";
import { auth, db } from "../firebase/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    /** 1 */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authSateChanged);
        return () => unsubscribe();
    }, []);

    /**
     * 2
     * Function envoyée depuis useEffect via onAuthStateChanged de Firebase
     * Si non connecté return
     * Si connecté return infos primaires de user
     */
    const authSateChanged = async (authState: UserInterface | User | null) => {
        if (!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return;
        }

        setAuthUserIsLoading(true);
        const formatedUser = formatAuthUser(authState);
        await getUserDocument(formatedUser);
    };

    /** 3
     * Formatage des données primaires de user ou authState
     */
    const formatAuthUser = (user: UserInterface) => ({
        // ici user = données primaires return si connecté
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
    });

    /** 4
     * Insertion des données de la base de donnée Firestore dans le user
     */
    const getUserDocument = async (user: UserInterface) => {
        // ici user = user formaté avec données primaires + userDocument
        if (auth.currentUser) {
            // Recuperation des données de Firestore
            const documentRef = doc(db, "users", auth.currentUser.uid);
            const compactUser = user;
            // Ecouteur onSnapshot pour recuperer en temps reel les modifs dans db firestore
            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument;
                }
                setAuthUser((prevAuthUser) => ({
                    ...prevAuthUser,
                    ...compactUser,
                }));
                // Fin du chargement
                setAuthUserIsLoading(false);
            });
        }
    };


    /** RETURN DONNEES ENVOYEES ET UTILISEES PAR LE CONTEXT */
    return {
        authUser,
        authUserIsLoading,
        getUserDocument,
    };
};

export default useFirebaseAuth;