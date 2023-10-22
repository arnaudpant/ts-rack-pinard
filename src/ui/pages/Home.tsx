import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthUserContext";
import Accueil from "../modules/accueil/Accueil";

const Home = () => {

    const { authUser } = useAuth()

    return (
        <>
            {
                authUser !== null ? (<Navigate to="/container-racks" replace={true} />) : (<Accueil /> )
            }
        </>
    );
};

export default Home;