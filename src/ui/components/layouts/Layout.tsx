/** ROOTER */
import { Outlet } from "react-router-dom";
/** COMPONENTS */
import Header from "./header/Header";
import Session from "../session/Session";
import Footer from "./footer/Footer";
import ListOfRacks from "./bandeauRack/ListOfRacks";

const Layout = () => {
    return (
        <Session>
            <Header />
            <ListOfRacks />
            <Outlet />
            <Footer />
        </Session>
    );
};

export default Layout;
