import { useAuth } from "../../../context/AuthUserContext";
import { Navigate } from "react-router-dom";
import HomeRacksView from "./HomeRacksView";
import { useEffect, useState } from "react";
import { Rack } from "@/types/RacksTypes";

const HomeRacks = () => {
    const { authUser } = useAuth();

    const onBoardingisCompleted: boolean =
        authUser?.userDocument.onBoardingisCompleted;

    const [listOfRacks, setListOfRacks] = useState<Rack[] | []>([]);

    useEffect(() => {
        authUser.userDocument.racks.length > 0 &&
            setListOfRacks(authUser.userDocument.racks);
    }, [authUser]);

    return (
        <>
            {authUser !== null ? (
                onBoardingisCompleted ? (
                    <HomeRacksView numberRacks={listOfRacks.length} />
                ) : (
                    <Navigate to="/boarding" replace={true} />
                )
            ) : (
                <Navigate to="/" replace={true} />
            )}
        </>
    );
};

export default HomeRacks;
