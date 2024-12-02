import { Bottle } from "../../../types/RacksTypes";
import useUpdateRacks from "../../../hooks/useUpdateRacks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfosBottleView from "./InfosBottleView";

const InfosBottle = () => {
    const location = useLocation();
    const bottleInfos = location.state as Bottle;
    const { deleteBottle, consommeBottle } = useUpdateRacks();
    const { updateRacks } = useUpdateRacks();
    const navigate = useNavigate();
    const [bottleInFavoris, setBottleInFavoris] = useState<boolean>(
        bottleInfos.favoris
    );

    const handleDeleteBottle = () => {
        deleteBottle(bottleInfos);
        navigate(`/rack/${bottleInfos.rackId}`, { state: bottleInfos.rackId });
    };

    const handleConsommeBottle = () => {
        consommeBottle(bottleInfos);
        deleteBottle(bottleInfos);
        navigate(`/rack/${bottleInfos.rackId}`, { state: bottleInfos.rackId });
    };

    const handleAddRemoveFavoris = () => {
        bottleInfos.rackId !== "314" && setBottleInFavoris((prev) => !prev);
        sendFavorisToFirebase();
    };

    useEffect(() => {
        bottleInFavoris !== bottleInfos.favoris && sendFavorisToFirebase();
    }, [bottleInFavoris]);

    const sendFavorisToFirebase = () => {
        const bottleWithfavorisInfos: Bottle = {
            ...bottleInfos,
            favoris: bottleInFavoris,
        };
        updateRacks(bottleWithfavorisInfos, true);
    };

    return (
        <InfosBottleView
            bottleInfos={bottleInfos}
            handleAddRemoveFavoris={handleAddRemoveFavoris}
            handleDeleteBottle={handleDeleteBottle}
            handleConsommeBottle={handleConsommeBottle}
            bottleInFavoris={bottleInFavoris}
        />
    );
};

export default InfosBottle;
