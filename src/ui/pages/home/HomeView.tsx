import { Link } from "react-router-dom";

type Props = {
    isConnected: boolean;
};

const HomeView = ({ isConnected }: Props) => {
    return (
        <>
            {isConnected ? (
                <div
                    className="flex justify-center gap-4"
                    data-testid="is-connected"
                >
                    <Link
                        to="/container-racks"
                        className="px-5 py-3 bg-vin text-fond rounded-lg shadow-sm"
                    >
                        MES RACKS
                    </Link>
                </div>
            ) : (
                <div
                    className="flex justify-center gap-4 flex-wrap pb-6"
                    data-testid="is-not-connected"
                >
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
        </>
    );
};

export default HomeView;