import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";
import Accueil from "../components/layouts/Accueil";
import ContainerRacks from "./ContainerRacks";


const Home = () => {

    const { authUser, authUserIsLoading } = useAuth()
    const [userConnected, setUserConnected] = useState<boolean>(false)

    // useEffect(()=>{
    //     if(authUser.uid !== null){
    //         setUserConnected(true)
    //     } else {
    //         setUserConnected(false)
    //     }
    //     console.log(userConnected)
    // }, [authUser])



    return (
        <>
            {/* <Accueil /> */}
            {
                userConnected ? (<ContainerRacks />) : (<Accueil />)
            }
        </>
    );
};

export default Home;