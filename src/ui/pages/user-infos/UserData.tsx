import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "@/types/RacksTypes";
import UserDataView from "./UserDataView";

const UserData = () => {
    const { authUser } = useAuth();
    const fullBottles: Bottle[] = authUser
        ? authUser.userDocument.racks.flatMap((rack) => rack.bottles)
        : [];

    // Retourner null ou un composant de chargement si l'utilisateur n'est pas authentifié
    if (!authUser) {
        throw new Error("Utilisateur non authentifié : authUser est requis.");
    }

    return <UserDataView fullBottles={fullBottles} />;
};

export default UserData;
