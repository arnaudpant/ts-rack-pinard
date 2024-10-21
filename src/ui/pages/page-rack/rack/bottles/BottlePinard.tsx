import { Bottle } from "../../../../../types/RacksTypes";
import { PlusCircle, Circle } from "lucide-react";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
    bottle: Bottle;
    nbrColums: number;
};

const colorMap = {
    rouge: "#AC1E44",
    blanc: "#0070C0",
    rose: "#F8C3CD",
    effervescent: "#00A651",
    champagne: "#FFD700",
    biere: "#FFFFFF",
    cidre: "#8FBC8F",
    aperitif: "FFA500",
    digestif: "FFA500",
    default: "#3a3a3a",
};

const bottleColorMap = {
    blanc: "#E1CE9A",
    rose: "#FFB6C1",
    effervescent: "#E1CE9A",
    champagne: "#E1CE9A",
    biere: "#C7CF00",
    cidre: "#8B6C42",
    aperitif: "#AC1E44",
    digestif: "#AC1E44",
    default: "#824348",
};

const BottlePinard: React.FC<Props> = ({ bottle, nbrColums }) => {

    const getColorBouchon = () =>
        colorMap[bottle.couleur as keyof typeof colorMap] ||
        colorMap[bottle.type as keyof typeof colorMap] ||
        colorMap.default;

    const getCouleurBouteille = () =>
        bottleColorMap[bottle.couleur as keyof typeof bottleColorMap] ||
        bottleColorMap[bottle.type as keyof typeof bottleColorMap] ||
        bottleColorMap.default;

    const textClass = clsx(
        nbrColums < 6
            ? "text-[10px] md:text-sm"
            : "hidden sm:block text-[10px] md:text-sm",
        "text-center xl:pt-1"
    );

    return (
        <>
            <div
                className="flex flex-col justify-center items-center min-h-[30px] rounded-lg bg-gris"
            >
                {bottle.type === "vide" ? (
                    <Link
                        to={`/add-bottle/:bottle`}
                        state={bottle}
                        className="bg-gris w-full rounded-full flex justify-center items-center"
                    >
                        <PlusCircle className="w-3/4 h-3/4 text-bouteille" />
                    </Link>
                ) : (
                    <Link
                        to={`/bottle-info/:bottle`}
                        state={bottle}
                        className="bg-gris w-full rounded-full flex justify-center items-center"
                    >
                        <Circle
                            className={clsx(
                                `w-3/4 h-3/4 ${getCouleurBouteille()}`
                            )}
                            width={36}
                            height={36}
                            strokeWidth={4}
                            fill={getColorBouchon()}
                        />
                    </Link>
                )}
                <p className={textClass} data-testid="bottle">
                    {bottle.appellation}
                </p>
            </div>
        </>
    );
};

export default BottlePinard;
