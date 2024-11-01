import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "@/types/RacksTypes";
import UserDataView from "./UserDataView";

const UserData = () => {
    const { authUser } = useAuth();
    const fullBottles: Bottle[] = authUser
        ? authUser.userDocument.racks.flatMap((rack) => rack.bottles)
        : [];
    if (!authUser) {
        throw new Error("Utilisateur non authentifié : authUser est requis.");
    }

    return <UserDataView fullBottles={fullBottles} />;
};

export default UserData;
