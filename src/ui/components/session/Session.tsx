import { useAuth } from "../../../context/AuthUserContext";
import Spinner from "../spinner/Spinner";
import { SessionStatus } from "../../../types/SessionStatus";
import { GUEST, REGISTERED } from "../../../lib/session-status";
import ContainerRacks from "../../../ui/pages/ContainerRacks";


interface Props {
    children: React.ReactNode,
    sessionStatus?: SessionStatus
}

const Session = ({ children, sessionStatus }: Props) => {
    const { authUserIsLoading, authUser } = useAuth()

    // if (sessionStatus === GUEST && !authUserIsLoading) {
    //     if (!authUser) {
    //         return (<>{children}</>)
    //     }
    // }

    /** SECURITE AUTHENTIFICATION
     * status authentifié + pas en chargement
     * Si user => Affichage Application
     * Si pas de user => Redirection connexion
     */
    // if (sessionStatus === REGISTERED && !authUserIsLoading) {
    //     if (authUser) {
    //         return (<>{children}</>)
    //     } else {
    //         return (
    //             <ContainerRacks />
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