// ROUTER DOM
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthUserContext";
import InscriptionView from "./InscriptionView";

const Inscription = () => {
    const { authUser } = useAuth();

    return (
        <>
            {authUser !== null ? (
                <Navigate to="/home-racks" replace={true} />
            ) : (
                <InscriptionView />
            )}
        </>
    );
};

export default Inscription;
