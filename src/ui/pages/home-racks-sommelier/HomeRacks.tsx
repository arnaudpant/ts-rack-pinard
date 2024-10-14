import { useAuth } from "../../../context/AuthUserContext";
import { Navigate } from "react-router-dom";
import { Rack } from "@/types/RacksTypes";
import HomeRacksView from "./HomeRacksView";

const HomeRacks = () => {
    const { authUser } = useAuth();

    if (!authUser) {
        return <Navigate to="/" replace />;
    }

    if (!authUser.userDocument.onBoardingisCompleted) {
        return <Navigate to="/boarding" replace />;
    }

    const listOfRacks: Rack[] = authUser.userDocument.racks ?? [];

    return <HomeRacksView numberRacks={listOfRacks.length} />;
};

export default HomeRacks;
