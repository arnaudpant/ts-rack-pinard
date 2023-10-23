/** ROOTER */
import { Outlet } from "react-router-dom";
/** COMPONENTS */
import Header from "./Header";
import Session from "../session/Session";


const Layout = () => {
    return (
        <Session>
            <Header />
            <Outlet />
        </Session>
    );
};

export default Layout;