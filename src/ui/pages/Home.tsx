import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthUserContext";
import Accueil from "../modules/accueil/Accueil";

const Home = () => {

    const { authUser, authUserIsLoading } = useAuth()
    console.log(authUserIsLoading)

    return (
        <>
            {
                authUserIsLoading === false ? (<Navigate to="/container-racks" />) : (<Accueil /> )
            }
        </>
    );
};

export default Home;