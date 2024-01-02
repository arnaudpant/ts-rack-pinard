import { Bottle } from "../../../../types/RacksTypes";
import { PlusCircle, Circle } from "lucide-react";
import clsx from "clsx";
import ModalBottle from "../modal/ModalBottle";
import ModalAddBottle from "../modal/ModalAddBottle";
import { useState } from "react";

type Props = {
    bottle: Bottle;
};

const BottlePinard = ({ bottle }: Props) => {
    const [modalShow, setModalShow] = useState(false);


    const handleClick = () => {
        setModalShow((v) => !v);
    };


    let colorBouchon = "bg-bouteille";
    bottle.couleur === "rouge"
        ? (colorBouchon = "#d63031")
        : bottle.couleur === "blanc"
        ? (colorBouchon = "#d4d408")
        : bottle.type === "mousseux"
        ? (colorBouchon = "#ffff00")
        : bottle.type === "champagne"
        ? (colorBouchon = "#ffff00")
        : bottle.couleur === "rose"
        ? (colorBouchon = "#F8C3CD")
        : "bg-bouteille";

    let couleurBouteille = "text-bouteille";
    bottle.couleur === "blanc"
        ? (couleurBouteille = "text-bouteille_blanc")
        : bottle.type === "mousseux"
        ? (couleurBouteille = "text-bouteille_champagne")
        : bottle.type === "champagne"
        ? (couleurBouteille = "text-bouteille_champagne")
        : bottle.couleur === "rose"
        ? (couleurBouteille = "text-bouteille_rose")
        : "bg-bouteille";

    return (
        <>
            <div
                className="flex flex-col justify-center items-center min-h-[30px] rounded-lg bg-gris cursor-pointer"
                onClick={handleClick}
            >
                {bottle.type === "vide" ? (
                    <div className=" bg-gris w-full rounded-full flex justify-center items-center">
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
                <p className="hidden md:block text-[10px] xl:text-sm text-center xl:pt-1">
                    { bottle.appellation && 
                    bottle.appellation}
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

