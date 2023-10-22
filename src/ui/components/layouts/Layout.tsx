import { Outlet } from "react-router-dom";
import Header from "./Header";
import Session from "../session/Session";

interface Props {
    sessionStatus?: string
}

const Layout = ({sessionStatus}: Props) => {
    return (
        <Session sessionStatus={sessionStatus}>
            <Header />
            <Outlet />
        </Session>
    );
};

export default Layout;