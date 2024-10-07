/** ROOTER */
import { Outlet } from "react-router-dom";
/** COMPONENTS */
import Session from "../session/Session";
import Header from "./header/Header";
import ListOfRacks from "./bandeauRack/ListOfRacks";
import Footer from "./footer/Footer";

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
