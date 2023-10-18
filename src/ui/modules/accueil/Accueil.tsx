import { Link } from "react-router-dom";

const Accueil = () => {
    return (
        <div className="flex flex-col">
        <h2 className="text-center text-xl italic py-4 px-1">Visualisez et gèrez vos casiers à bouteilles !</h2>
        <div className="h-80 md:h-96 w-full flex justify-center">
            <img src="/vine.svg" alt="" className="h-80 w-80 md:h-full" />
        </div>
        <div className="flex justify-center gap-4">
            <Link to='/inscription' className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm" >INSCRIPTION</Link>
            <Link to='/connexion' className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm" >CONNEXION</Link>
        </div>
    </div>
    );
};

export default Accueil;