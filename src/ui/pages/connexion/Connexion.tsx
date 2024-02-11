import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthUserContext";
import ConnexionView from "./ConnexionView";

const Connexion = () => {
    const { authUser, authUserIsLoading } = useAuth();
    const onBoardingisCompleted = authUser?.userDocument.onBoardingisCompleted;

    const shouldRedirectOnboarding = () => {
        return !authUserIsLoading && onBoardingisCompleted;
    };

    return (
        <>
            {authUser !== null ? (
                !shouldRedirectOnboarding() ? (
                    <Navigate to="/boarding" replace={true} />
                ) : (
                    <Navigate to="/home-racks" replace={true} />
                )
            ) : (
                <ConnexionView />
            )}
        </>
    );
};

export default Connexion;
