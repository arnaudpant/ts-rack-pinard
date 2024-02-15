import { useAuth } from "../../../context/AuthUserContext";
import { useEffect, useState } from "react";
import { Bottle } from "@/types/RacksTypes";
import UserDataView from "./UserDataView";

const UserData = () => {
    const { authUser } = useAuth();
    const [fullBottles, setFullBottles] = useState<Bottle[]>([]);

    useEffect(() => {
        let racksMap: Bottle[];
        if (authUser) {
            racksMap = authUser.userDocument.racks
                .map((rack) => rack.bottles)
                .flatMap((bottle) => bottle);
            setFullBottles(racksMap);
        }
    }, [authUser]);

    return <UserDataView fullBottles={fullBottles} />;
};

export default UserData;
