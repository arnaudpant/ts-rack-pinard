import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "../../../types/RacksTypes";
import { useEffect, useState } from "react";
import CaveVirtuelleView from "./CaveVirtuelleView";
import useUpdateRacks from "../../../hooks/useUpdateRacks";

const CaveVirtuelle = () => {
    const { authUser } = useAuth();
    const { deletedBottleFavoris } = useUpdateRacks();
    const [bottlesForLater, setBottlesForLater] = useState<Bottle[]>([]);
    const handleDelete = (id: string) => {
        deletedBottleFavoris(id);
    };

    useEffect(() => {
        authUser && setBottlesForLater(authUser.userDocument.bottlesFavoris);
    }, [authUser]);

    return (
        <CaveVirtuelleView
            bottlesForLater={bottlesForLater}
            handleDelete={handleDelete}
        />
    );
};

export default CaveVirtuelle;
