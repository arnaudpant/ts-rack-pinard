import { Link } from "react-router-dom";
import BoxInscription from "../modules/authentification/inscription/BoxInscription";


const Inscription = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center text-xl py-4 px-1">Créez un compte pour pouvoir gérer vos casiers à bouteilles</h2>
            <div>
                <img src="/wine-bottle.svg" alt="bouteille de vin" className="h-20 w-20" />
            </div>
            <BoxInscription />
            <p className="text-sm text-center pb-4">En t'inscrivant, tu acceptes les <Link to="/#" className="text-vin">conditions d'utilisation</Link>  et la <Link to="/#" className="text-vin">politique de confidentialité</Link></p>
        </div>
    );
};

export default Inscription;