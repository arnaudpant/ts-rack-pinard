// ROUTER DOM
import { Link, Navigate } from "react-router-dom";
import BoxInscription from "../modules/authentification/inscription/BoxInscription";
import { useAuth } from "../../context/AuthUserContext";


const Inscription = () => {
    const { authUser } = useAuth()

    return (
        <>
            {
                authUser !== null ? (
                    <Navigate to="/container-racks" replace={true} />
                )
                    :
                    (
                        <div className="flex flex-col items-center">
                            <h2 className="text-center text-xl py-4 px-1">Créez un compte pour pouvoir gérer vos casiers à bouteilles</h2>
                            <div>
                                <img src="/logo-cave.png" alt="bouteille de vin" className="h-20 w-20" />
                            </div>
                            <BoxInscription />
                            <p className="text-sm text-center pb-4">En t'inscrivant, tu acceptes les <Link to="/#" className="text-vin">conditions d'utilisation</Link>  et la <Link to="/#" className="text-vin">politique de confidentialité</Link></p>
                        </div>
                    )
            }
        </>


    );
};

export default Inscription;