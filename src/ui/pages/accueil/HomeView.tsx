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
                        to="/home-racks"
                        className="px-5 py-3 bg-vin text-fond rounded-lg shadow-sm"
                    >
                        MES RACKS
                    </Link>
                </div>
            ) : (
                <div
                    className="flex flex-col justify-center gap-4 pb-6"
                    data-testid="is-not-connected"
                >
                    <div className="flex justify-center gap-4 flex-wrap pb-2">
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
                    <Link
                        to="/demonstration"
                        className="mb-4 px-3 py-1 bg-vin50 text-vin rounded-lg shadow-sm text-center"
                    >
                        DEMONSTRATION
                    </Link>
                </div>
            )}
        </>
    );
};

export default HomeView;
