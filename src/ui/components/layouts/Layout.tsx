import { Outlet } from "react-router-dom";
import Header from "./Header";
import Session from "../session/Session";
import { SessionStatus } from "../../../types/SessionStatus";

interface Props {
    sessionStatus?: SessionStatus
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