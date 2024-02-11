/** CONTEXT */
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import HomeView from "./HomeView";


const Home = () => {
    const { authUser } = useAuth();
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        authUser ? setIsConnected(true) : setIsConnected(false);
        console.log("render Home");
    }, [authUser]);

    return (
        <div className="flex flex-col justify-around items-center gap-2 min-h-[calc(100vh-120px)]">
            <div className="text-center text-xl italic pt-4">
                <h2 className="px-1 pb-2">Gèrez votre cave facilement !</h2>
                <h3 className="px-2">
                    Retrouvez rapidement vos bouteilles depuis cette
                    application.
                </h3>
            </div>

            <div className="h-64 md:h-90 mb-5 w-full flex justify-center">
                <img
                    src="/home-logo.png"
                    alt="bouteille de vin devant une cave a vin"
                    className="h-full max-h-72"
                />
            </div>

            <HomeView isConnected={isConnected} />
        </div>
    );
};

export default Home;
