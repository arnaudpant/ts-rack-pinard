/** ROOTER */
import { Outlet } from "react-router-dom";
/** COMPONENTS */
import Header from "./header/Header";
import Session from "../session/Session";
import Footer from "./Footer";

const Layout = () => {
    return (
        <Session>
            <Header />
            <Outlet />
            <Footer />
        </Session>
    );
};

export default Layout;
