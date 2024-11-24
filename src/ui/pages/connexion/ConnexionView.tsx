
import { Link } from "react-router-dom";
import BoxConnexion from "./BoxConnexion";

const ConnexionView = () => {
    return (
        <div
            className="flex flex-col items-center min-h-[calc(100vh-120px)]"
            data-testid="connexion-view"
        >
            <h2 className="text-center text-xl py-4 px-1">
                Connectez-vous pour gérer vos casiers à bouteilles
            </h2>
            <div>
                <img
                    src="/wine-bottle.svg"
                    alt="bouteille de vin"
                    className="h-20 w-20"
                />
            </div>
            <BoxConnexion />
            <Link
                to="/forget-password"
                className="text-sm text-center text-vin pb-4"
            >
                Mot de passe perdu ?
            </Link>
        </div>
    );
};

export default ConnexionView;
