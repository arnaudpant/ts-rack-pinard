import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthUserContext";
import HomeView from "./HomeView";

const Home = () => {

    const { authUser } = useAuth();
    if (authUser) {
        return <Navigate to="/home-racks" replace />;
    }
    
    return (
        <div className="flex flex-col justify-around items-center gap-2 min-h-[calc(100vh-120px)]">
            <div className="container text-center text-xl italic pt-4">
                <h1 className="text-2xl md:text-3xl px-2 md:mb-8">
                    La gestion de cave à vin simplifiée: votre collection à
                    portée de main !
                </h1>
                <div className="hidden md:block">
                    <p className="text-lg px-1 text-left">
                        Notre application de gestion de cave à vin révolutionne
                        l'organisation et le suivi de votre collection.
                        <br />
                        Profitez d'un aperçu visuel intuitif de vos bouteilles
                        dans leurs racks, pour une navigation facile et rapide.
                        Enrichissez votre cave virtuelle en ajoutant chaque
                        bouteille avec une multitude d'informations détaillées :
                        nom, domaine, exploitation, cépage, millésime, date
                        d'achat, prix, accords mets-vins, type de vin et profil
                        gustatif.
                        <br />
                        Gérez votre consommation grâce à notre fonction de
                        suppression intelligente, qui déplace les bouteilles
                        dans un container virtuel, vous offrant ainsi un
                        historique complet de vos dégustations. <br />
                        Marquez vos vins préférés pour y accéder rapidement et
                        utilisez notre fonction de sauvegarde pour planifier vos
                        futurs achats. <br />
                        Que vous soyez amateur ou collectionneur averti, notre
                        application vous accompagne dans chaque aspect de votre
                        passion œnologique, de la gestion quotidienne aux
                        découvertes futures.
                    </p>
                </div>
            </div>

            <div className="h-64 md:h-90 mb-5 w-full flex justify-center">
                <img
                    src="home-logo.png"
                    alt="bouteille de vin devant une cave a vin"
                    className="h-full max-h-72"
                />
            </div>
            <HomeView />
        </div>
    );
};

export default Home;
