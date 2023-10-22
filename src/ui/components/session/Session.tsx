import { useAuth } from "../../../context/AuthUserContext";
import Spinner from "../spinner/Spinner";
import { SessionStatus } from "../../../types/SessionStatus";
import Header from "../layouts/Header";
//import Home from "../../../ui/pages/Home";
import ContainerRacks from "../../../ui/pages/ContainerRacks";
import { Navigate } from "react-router-dom";

// import { REGISTERED } from "../../../lib/session-status";


interface Props {
    children: React.ReactNode,
    sessionStatus?: SessionStatus
}

const Session = ({ children, sessionStatus }: Props) => {

    const { authUserIsLoading, authUser } = useAuth()

    if (sessionStatus === "guest" && !authUserIsLoading) {
        if (!authUser) {
            return (<>{children}</>)
        }
    }

    /** SECURITE AUTHENTIFICATION
     * status authentifié + pas en chargement
     * Si user => Affichage des racks
     * Si pas de user => Redirection page accueil
     */
    if (sessionStatus === "registered" && !authUserIsLoading) {
        if (authUser) {

            return (
                <>
                    <Header />
                    <ContainerRacks />
                    <Navigate to="/container-racks" />
                </>)
        }
        else {
            return (
                <>
                    {/* <Header />
                    <Home /> */}
                    {children}
                    <Navigate to="/" />
                </>
            )
        }
    }

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