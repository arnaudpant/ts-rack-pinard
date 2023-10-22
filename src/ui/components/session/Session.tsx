import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthUserContext";
import Spinner from "../spinner/Spinner";


interface Props {
    children: React.ReactNode,
    sessionStatus?: string
}

const Session = ({ children, sessionStatus }: Props) => {
    const { authUserIsLoading, authUser } = useAuth()

    /** SECURITE AUTHENTIFICATION
     * status authentifié + pas en chargement
     * Si user => Affichage Application
     * Si pas de user => Redirection connexion
     */
    //if (sessionStatus === "registered" && !authUserIsLoading) {
    //     if (authUser) {
    //         return (<>{children}</>)
    //     } else {
    //         return (
    //             <Navigate to="/" />
    //         )
    //     }
    // }

    /** AFFICHAGE SPINNER - CAS 1:
     * Pas en chargement => Affichage Application
     * En chargement => Affichage SPINNER
     */
    if (!authUserIsLoading) {
        return <>{children}</>
    }
    return (
        <>
            <Spinner />
        </>
    );
};

export default Session;