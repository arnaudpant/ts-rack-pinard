import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./ui/components/layouts/Layout";
import Home from "./ui/pages/Home";
import Connexion from "./ui/pages/Connexion";
import Inscription from "./ui/pages/Inscription";
import ForgetPassword from "./ui/pages/ForgetPassword";
import ContainerRacks from "./ui/pages/ContainerRacks";
// import { useAuth } from "./context/AuthUserContext";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/container-racks" element={<ContainerRacks />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
