import { useEffect } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import { Link, useNavigate } from "react-router-dom";

const HomeView = () => {
    const navigate = useNavigate();
    const { authUser } = useAuth();

    useEffect(() => {
        authUser && navigate("/home-racks");
    }, [authUser]);

    return (
        <div
            className="flex flex-col justify-center gap-4 pb-6"
            data-testid="is-not-connected"
        >
            <div className="flex justify-center gap-4 flex-wrap pb-2">
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
