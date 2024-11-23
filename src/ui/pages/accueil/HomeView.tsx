import { Link } from "react-router-dom";

const HomeView = () => {

    return (
        <div
            className="flex flex-col justify-center gap-4 pb-6"
        >
            <div className="flex justify-center gap-4 flex-wrap pb-2" data-testid="btn-not-connected">
                <Link
                    to="/inscription"
                    className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm hover:bg-vin100 hover:text-vin800"
                >
                    INSCRIPTION
                </Link>
                <Link
                    to="/connexion"
                    className="px-3 py-1 bg-vin text-fond rounded-lg shadow-sm hover:bg-vin100 hover:text-vin800"
                >
                    CONNEXION
                </Link>
            </div>
            <Link
                to="/demonstration"
                className="mb-4 px-3 py-1 bg-vin50 text-vin700 rounded-lg shadow-sm text-center"
            >
                DEMONSTRATION
            </Link>
        </div>
    );
};

export default HomeView;
