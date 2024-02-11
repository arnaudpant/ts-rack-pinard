/** ROOTER */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** PAGES */
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
/** COMPONENTS */
import Layout from "./ui/components/layouts/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./error-boundary/ErrorBoundaryComponent";

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
                        <Route path="/rack/:id" element={<RackId />} />
                        <Route path="/user-infos" element={<UserInfos />} />
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
