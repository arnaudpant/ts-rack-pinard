import { Bottle } from "../../../../../types/RacksTypes";
import { PlusCircle, Circle } from "lucide-react";
import clsx from "clsx";
import ModalBottle from "../modal/ModalBottle";
import ModalAddBottle from "../../../../modules/modal/ModalAddBottle";
import { useState } from "react";

type Props = {
    bottle: Bottle;
    nbrColums: number;
};

const colorMap = {
    rouge: "#d63031",
    blanc: "#d4d408",
    rose: "#F8C3CD",
    mousseux: "#d4d408",
    champagne: "#ffff00",
    biere: "#3c40c6",
    cidre: "#3c40c6",
    spiritueux: "#3a3a3a",
    default: "#3a3a3a",
};

const bottleColorMap = {
    blanc: "text-bouteille_blanc",
    mousseux: "text-bouteille_champagne",
    champagne: "text-bouteille_champagne",
    rose: "text-bouteille_rose",
    biere: "text-bouteille_biere",
    cidre: "text-bouteille",
    spiritueux: "text-bouteille_biere",
    default: "text-bouteille",
};

const BottlePinard: React.FC<Props> = ({ bottle, nbrColums }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => setModalShow((prev) => !prev);

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
                className="flex flex-col justify-center items-center min-h-[30px] rounded-lg bg-gris cursor-pointer"
                onClick={handleClick}
            >
                {bottle.type === "vide" ? (
                    <div
                        className="bg-gris w-full rounded-full flex justify-center items-center"
                        data-testid="case-empty"
                    >
                        <PlusCircle className="w-3/4 h-3/4 text-bouteille" />
                    </div>
                ) : (
                    <div className="bg-gris w-full rounded-full flex justify-center items-center">
                        <Circle
                            className={clsx(
                                `w-3/4 h-3/4 ${getCouleurBouteille()}`
                            )}
                            width={36}
                            height={36}
                            strokeWidth={4}
                            fill={getColorBouchon()}
                        />
                    </div>
                )}
                <p className={textClass} data-testid="bottle">
                    {bottle.appellation}
                </p>
            </div>
            {modalShow &&
                (bottle.type === "vide" ? (
                    <ModalAddBottle bottle={bottle} handleClick={handleClick} />
                ) : (
                    <ModalBottle bottle={bottle} handleClick={handleClick} />
                ))}
        </>
    );
};

export default BottlePinard;
