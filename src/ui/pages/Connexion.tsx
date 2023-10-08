import BoxConnexion from "../modules/authentification/connexion/BoxConnexion";

const Connexion = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center text-xl py-4 px-1">Connectez-vous pour gérer vos casiers à bouteilles</h2>
            <div>
                <img src="/wine-bottle.svg" alt="bouteille de vin" className="h-20 w-20" />
            </div>
            <BoxConnexion />
        </div>
    );
};

export default Connexion;
