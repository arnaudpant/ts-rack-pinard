import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthUserContext";
import BoxConnexion from "../modules/authentification/connexion/BoxConnexion";

const Connexion = () => {
    const { authUser, authUserIsLoading } = useAuth()
    const onBoardingisCompleted = authUser?.userDocument.onBoardingisCompleted
    
    const shouldRedirectOnboarding = () => {
        return (
            !authUserIsLoading && onBoardingisCompleted
        )
    }

    return (
        <>
            {
                authUser !== null ?
                    ( !shouldRedirectOnboarding() ? <Navigate to="/boarding" replace={true} /> :
                        <Navigate to="/container-racks" replace={true} />
                    )
                    :
                    (
                        <div className="flex flex-col items-center">
                            <h2 className="text-center text-xl py-4 px-1">Connectez-vous pour gérer vos casiers à bouteilles</h2>
                            <div>
                                <img src="/wine-bottle.svg" alt="bouteille de vin" className="h-20 w-20" />
                            </div>
                            <BoxConnexion />
                            <Link to="/forget-password" className="text-sm text-center text-vin pb-4">Mot de passe perdu ?</Link>
                        </div>
                    )
            }
        </>
    );
};

export default Connexion;
