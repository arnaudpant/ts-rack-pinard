import { useAuth } from "../../../context/AuthUserContext";
import Spinner from "../spinner/Spinner";



interface Props {
    children: React.ReactNode,
}

const Session = ({ children }: Props) => {

    const { authUserIsLoading } = useAuth()

    /** AFFICHAGE SPINNER
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