import { Bottle } from "../../../types/RacksTypes";
import { Heart, HeartOff, Pen, Trash2, Undo2, Wine } from "lucide-react";
import useUpdateRacks from "../../../hooks/useUpdateRacks";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const InfosBottle = () => {
    const location = useLocation();
    const bottleInfos = location.state as Bottle;
    const { deleteBottle, consommeBottle } = useUpdateRacks();
    const { updateRacks } = useUpdateRacks();
    const navigate = useNavigate();
    const [bottleInFavoris, setBottleInFavoris] = useState<boolean>(
        bottleInfos.favoris
    );

    const handleDeleteBottle = (bottle: Bottle) => {
        deleteBottle(bottle);
        navigate(`/rack/${bottleInfos.rackId}`, { state: bottleInfos.rackId });
    };

    const handleConsommeBottle = (bottle: Bottle) => {
        consommeBottle(bottle);
        deleteBottle(bottle);
        navigate(`/rack/${bottleInfos.rackId}`, { state: bottleInfos.rackId });
    };

    const handleAddRemoveFavoris = () => {
        bottleInfos.rackId !== "314" && setBottleInFavoris((prev) => !prev);
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
        <div className="container flex flex-col justify-start gap-8 min-h-[calc(100vh-232px)] pt-10 pb-4">
            <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-8">
                {/* PARTIE A */}
                <div className="pr-10">
                    {bottleInfos.nom && (
                        <h2 className="text-2xl font-bold">
                            {bottleInfos.nom.toUpperCase()}
                        </h2>
                    )}
                    {bottleInfos.millesime && (
                        <p className="text-sm text-bouteille pb-4">
                            {bottleInfos.millesime}
                        </p>
                    )}
                    {bottleInfos.appellation && (
                        <h3 className="text-md font-semibold pb-1">
                            {bottleInfos.appellation}
                        </h3>
                    )}
                    {bottleInfos.exploitation && (
                        <p className="text-md font-semibold pb-1">
                            {bottleInfos.exploitation}
                        </p>
                    )}
                    {bottleInfos.cepage && (
                        <p className="text-sm text-bouteille pb-1">
                            {bottleInfos.cepage}
                        </p>
                    )}
                </div>
                {/* PARTIE B */}
                <div className="flex flex-col">
                    {bottleInfos.prix && (
                        <p className="text-sm text-bouteille pb-2">
                            Prix: {bottleInfos.prix} €
                        </p>
                    )}
                    <p className="text-xs pb-6">
                        {bottleInfos.pays?.toUpperCase()}
                    </p>
                    {bottleInfos.couleur && (
                        <p className="text-sm pb-2">{bottleInfos.couleur}</p>
                    )}
                    {bottleInfos.saveur && (
                        <p className="text-sm text-bouteille pb-2">
                            {bottleInfos.saveur}
                        </p>
                    )}
                    {bottleInfos.corps && (
                        <p className="text-sm text-bouteille pb-2">
                            {bottleInfos.corps}
                        </p>
                    )}
                </div>
                {/* PARTIE C */}
                <div className="flex flex-col justify-between">
                    {bottleInfos.status && (
                        <p className="text-sm pb-4">{bottleInfos.status}</p>
                    )}
                    {bottleInfos.accords && (
                        <>
                            <p className="text-sm font-semibold">
                                A consommer avec:
                            </p>
                            <p className="text-sm text-bouteille pb-4">
                                {bottleInfos.accords}
                            </p>
                        </>
                    )}
                    <div
                        className={clsx(
                            bottleInfos.rackId === "314" &&
                                "cursor-not-allowed",
                            "cursor-pointer"
                        )}
                        onClick={() => handleAddRemoveFavoris()}
                    >
                        {bottleInFavoris === false ? (
                            <HeartOff width={32} height={32} color="#914159" />
                        ) : (
                            <Heart
                                width={32}
                                height={32}
                                fill="#914159"
                                color="#914159"
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-10 mb-4">
                <div className="flex flex-col flex-wrap sm:flex-row gap-4 mb-6 justify-center items-center px-2">
                    <button
                        className={clsx(
                            bottleInfos.rackId === "314" &&
                                "cursor-not-allowed",
                            "flex justify-center gap-2 w-40 px-4 py-2 bg-vin50 hover:bg-vin50/80 text-vin800 rounded-full shadow-md"
                        )}
                        onClick={() => handleConsommeBottle(bottleInfos)}
                        disabled={bottleInfos.rackId === "314"}
                    >
                        Boire <Wine />
                    </button>
                    <button
                        className={clsx(
                            bottleInfos.rackId === "314" &&
                                "cursor-not-allowed",
                            "flex justify-center gap-2 w-40 px-4 py-2 bg-vin50 hover:bg-vin50/80 text-vin800 rounded-full shadow-md"
                        )}
                        onClick={() => handleDeleteBottle(bottleInfos)}
                        disabled={bottleInfos.rackId === "314"}
                    >
                        Supprimer <Trash2 />
                    </button>
                    <Link
                        to={clsx(
                            bottleInfos.rackId === "314"
                                ? "/demonstration"
                                : `/bottle-modif/${bottleInfos.id}`
                        )}
                        state={bottleInfos}
                        className={clsx(
                            bottleInfos.rackId === "314" &&
                                "cursor-not-allowed",
                            "flex justify-center gap-2 w-40 px-4 py-2 bg-vin50 hover:bg-vin50/80 text-vin800 rounded-full shadow-md"
                        )}
                    >
                        Modifier <Pen />
                    </Link>
                </div>
                <div className="mx-auto mt-10">
                    <Link
                        to={clsx(
                            bottleInfos.rackId === "314"
                                ? "/demonstration"
                                : `/rack/${bottleInfos.rackId}`
                        )}
                        state={bottleInfos.rackId}
                        className="flex justify-center gap-2 w-52 px-4 py-2 bg-vin hover:bg-vin/80 text-fond text-center rounded-full shadow-md"
                    >
                        RETOUR <Undo2 />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InfosBottle;
