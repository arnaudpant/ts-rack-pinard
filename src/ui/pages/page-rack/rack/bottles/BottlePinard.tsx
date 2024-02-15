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

const BottlePinard = ({ bottle, nbrColums }: Props) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {      
        setModalShow((v) => !v);
    };

    let colorBouchon = "#3a3a3a";
    bottle.couleur === "rouge"
        ? (colorBouchon = "#d63031")
        : bottle.couleur === "blanc"
        ? (colorBouchon = "#d4d408")
        : bottle.type === "mousseux"
        ? (colorBouchon = "#d4d408")
        : bottle.type === "champagne"
        ? (colorBouchon = "#ffff00")
        : bottle.couleur === "rose"
        ? (colorBouchon = "#F8C3CD")
        : bottle.type === "biere"
        ? (colorBouchon = "#3c40c6")
        : bottle.type === "cidre"
        ? (colorBouchon = "#3c40c6")
        : bottle.type === "spiritueux"
        ? (colorBouchon = "bg-bouteille")
        : "#3a3a3a";

    let couleurBouteille = "text-bouteille";
    bottle.couleur === "blanc"
        ? (couleurBouteille = "text-bouteille_blanc")
        : bottle.type === "mousseux"
        ? (couleurBouteille = "text-bouteille_champagne")
        : bottle.type === "champagne"
        ? (couleurBouteille = "text-bouteille_champagne")
        : bottle.couleur === "rose"
        ? (couleurBouteille = "text-bouteille_rose")
        : bottle.type === "biere"
        ? (couleurBouteille = "text-bouteille_biere")
        : bottle.type === "cidre"
        ? (couleurBouteille = "text-bouteille")
        : bottle.type === "spiritueux"
        ? (couleurBouteille = "text-bouteille_biere")
        : "bg-bouteille";

    return (
        <>
            <div
                className="flex flex-col justify-center items-center min-h-[30px] rounded-lg bg-gris cursor-pointer"
                onClick={handleClick}
            >
                {bottle.type === "vide" ? (
                    <div className=" bg-gris w-full rounded-full flex justify-center items-center" data-testid="case-empty">
                        <PlusCircle className="w-3/4 h-3/4 text-bouteille" />
                    </div>
                ) : (
                    <div className=" bg-gris w-full rounded-full flex justify-center items-center">
                        <Circle
                            className={clsx(`w-3/4 h-3/4 ${couleurBouteille}`)}
                            width={36}
                            height={36}
                            strokeWidth={4}
                            fill={`${colorBouchon}`}
                        />
                    </div>
                )}
                <p
                    className={clsx(
                        nbrColums < 6
                            ? "text-[10px] md:text-sm"
                            : "hidden sm:block text-[10px] md:text-sm",
                        "text-center xl:pt-1"
                        )}
                        data-testid="bottle"
                >
                    {bottle.appellation}
                </p>
            </div>
            {modalShow && bottle.type !== "vide" ? (
                <ModalBottle
                    bottle={bottle}
                    handleClick={() => handleClick()}
                />
            ) : modalShow && bottle.type === "vide" ? (
                <ModalAddBottle
                    bottle={bottle}
                    handleClick={() => handleClick()}
                />
            ) : null}
        </>
    );
};

export default BottlePinard;
