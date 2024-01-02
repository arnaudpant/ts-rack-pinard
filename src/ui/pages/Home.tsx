/** CONTEXT */
import { useAuth } from "../../context/AuthUserContext";
/** ROOTER */
import { Link } from "react-router-dom";
/** COMPONENTS */


const Home = () => {

    const { authUser } = useAuth()

    return (
        <>
            <div className="flex flex-col">
                <h2 className="text-center text-xl italic pb-4 px-1 pt-10">
                    Gèrez votre cave facilement !
                </h2>
                <h3 className="text-center text-xl italic py-4 px-1">
                    Retrouvez rapidement vos bouteilles depuis cette application.
                </h3>
                <div className="h-72 md:h-90 mb-5 w-full flex justify-center">
                    <img src="/home-logo.png" alt="" className="h-72" />
                </div>

                {authUser !== null ? (
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/container-racks"
                            className="px-5 py-3 bg-vin text-fond rounded-lg shadow-sm"
                        >
                            MES RACKS
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/inscription"
                            className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm"
                        >
                            INSCRIPTION
                        </Link>
                        <Link
                            to="/connexion"
                            className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm"
                        >
                            CONNEXION
                        </Link>
                    </div>
                )}
                {/* <div className="flex justify-center mt-10">
                    <Link to='/demonstration' className="px-3 py-1 bg-vin50 hover:bg-vin100 text-vin rounded-lg shadow-sm" >DEMONSTRATION</Link>
                </div> */}
                <div className="absolute bottom-2 right-2 text-xs text-vin200">Version 1.0</div>
            </div>
        </>
    );
};

export default Home;