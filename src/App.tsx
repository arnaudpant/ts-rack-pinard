import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/pages/accueil/Home";
import Connexion from "./ui/pages/connexion/Connexion";
import Inscription from "./ui/pages/inscription/Inscription";
import ForgetPassword from "./ui/pages/forget-password/ForgetPassword";
import HomeRacks from "./ui/pages/home-racks-sommelier/HomeRacks";
import Boarding from "./ui/pages/boarding/Boarding";
import Demonstration from "./ui/pages/page-rack/rack/demonstration/Demonstration";
import UserInfos from "./ui/pages/user-infos/UserInfos";
import RackId from "./ui/pages/page-rack/RackId";
import Politique from "./ui/components/layouts/footer/politique/Politique";
import Cgu from "./ui/components/layouts/footer/cgu/Cgu";
import Layout from "./ui/components/layouts/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./error-boundary/ErrorBoundaryComponent";
import UserData from "./ui/pages/user-infos/UserData";
import BottlesDrink from "./ui/pages/page-bottle-drink/BottlesDrink";
import CaveVirtuelle from "./ui/pages/cave-virtuelle/CaveVirtuelle";
import AddRackPage from "./ui/pages/home-racks-sommelier/AddRackPage";
import AddNewBottle from "./ui/pages/page-rack/rack/bottles/AddNewBottle";
import InfosBottle from "./ui/pages/page-bootle-info/InfosBottle";
import ModifBottle from "./ui/pages/page-rack/rack/bottles/ModifBottle";
import AddBootleForBuyLater from "./ui/pages/buy-later/AddBootleForBuyLater";
import BottlesListsFilter from "./ui/pages/user-infos/BottlesListsFilter";
import FavorisBottles from "./ui/pages/favoris/FavorisBottles";

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary
                FallbackComponent={ErrorBoundaryComponent}
                onReset={() => {}}
            >
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/connexion" element={<Connexion />} />
                        <Route path="/inscription" element={<Inscription />} />
                        <Route
                            path="/forget-password"
                            element={<ForgetPassword />}
                        />
                        <Route path="/boarding" element={<Boarding />} />
                        <Route path="/home-racks" element={<HomeRacks />} />
                        <Route path="/add-rack" element={<AddRackPage />} />
                        <Route path="/rack/:id" element={<RackId />} />
                        <Route
                            path="/add-bottle/:bottle"
                            element={<AddNewBottle />}
                        />
                        <Route
                            path="/bottle-info/:bottle"
                            element={<InfosBottle />}
                        />
                        <Route
                            path="/bottle-modif/:bottle"
                            element={<ModifBottle />}
                        />
                        <Route
                            path="/bottles-drink"
                            element={<BottlesDrink />}
                        />
                        <Route
                            path="/cave-virtuelle"
                            element={<CaveVirtuelle />}
                        />
                        <Route
                            path="/buy-later"
                            element={<AddBootleForBuyLater />}
                        />
                        <Route
                            path="/favoris-bottle"
                            element={<FavorisBottles />}
                        />
                        <Route path="/user-infos" element={<UserInfos />} />
                        <Route
                            path="/list-bouteilles"
                            element={<BottlesListsFilter />}
                        />
                        <Route path="/user-data" element={<UserData />} />
                        <Route path="/politique" element={<Politique />} />
                        <Route path="/cgu" element={<Cgu />} />
                        <Route
                            path="/demonstration"
                            element={<Demonstration />}
                        />
                        <Route path="/*" element={<Home />} />
                    </Route>
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
