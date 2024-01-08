/** CONTEXT */
import { useAuth } from "../../context/AuthUserContext";
/** ROOTER */
import { Link } from "react-router-dom";
/** COMPONENTS */

const Home = () => {
    const { authUser } = useAuth();

    return (
        <div className="flex flex-col justify-around items-center gap-2 min-h-[calc(100vh-120px)]">
            <div className="text-center text-xl italic pt-4">
                <h2 className="px-1 pb-2">
                    Gèrez votre cave facilement !
                </h2>
                <h3 className="px-2">
                    Retrouvez rapidement vos bouteilles depuis cette
                    application.
                </h3>
            </div>

            <div className="h-64 md:h-90 mb-5 w-full flex justify-center">
                <img src="/home-logo.png" alt="bouteille de vin devant une cave a vin" className="h-full max-h-72" />
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
                <div className="flex justify-center gap-4 flex-wrap pb-6">
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
                    {/* <Link
                            to="/demonstration"
                            className="px-3 py-1 bg-vin50 text-vin rounded-lg shadow-sm"
                        >
                            DEMONSTRATION
                        </Link> */}
                </div>
            )}
            {/* <div className="flex justify-center mt-10">
                    <Link to='/demonstration' className="px-3 py-1 bg-vin50 hover:bg-vin100 text-vin rounded-lg shadow-sm" >DEMONSTRATION</Link>
                </div> */}
        </div>
    );
};

export default Home;
