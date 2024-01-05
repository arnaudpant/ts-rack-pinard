/** ROOTER */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** PAGES */
import Home from "./ui/pages/Home";
import Connexion from "./ui/pages/Connexion";
import Inscription from "./ui/pages/Inscription";
import ForgetPassword from "./ui/pages/ForgetPassword";
import ContainerRacks from "./ui/pages/ContainerRacks";
import Boarding from "./ui/pages/Boarding";
import Demonstration from "./ui/pages/Demonstration";
import UserInfos from "./ui/pages/UserInfos";
import RackId from "./ui/pages/RackId";
/** COMPONENTS */
import Layout from "./ui/components/layouts/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./error-boundary/ErrorBoundaryComponent";


function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent} onReset={() => { }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/container-racks" element={<ContainerRacks />} />
            <Route path="/rack/:id" element={<RackId />} />
            <Route path="/user-infos" element={<UserInfos />} />
            <Route path="/demonstration" element={<Demonstration />} />
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
