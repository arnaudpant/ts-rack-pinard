import { Bottle } from "../../../../types/RacksTypes";
import { PlusCircle } from "lucide-react";
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
        ? (colorBouchon = "bg-vin_rouge")
        : bottle.couleur === "blanc"
        ? (colorBouchon = "bg-vin_blanc")
        : bottle.type === "mousseux"
        ? (colorBouchon = "bg-vin_champagne")
        : bottle.type === "champagne"
        ? (colorBouchon = "bg-vin_champagne")
        : bottle.couleur === "rose"
        ? (colorBouchon = "bg-vin_rose")
        : "bg-bouteille";

    let couleurBouteille = "bg-bouteille";
    bottle.couleur === "blanc"
        ? (couleurBouteille = "bg-bouteille_blanc")
        : bottle.type === "mousseux"
        ? (couleurBouteille = "bg-bouteille_champagne")
        : bottle.type === "champagne"
        ? (couleurBouteille = "bg-bouteille_champagne")
        : bottle.couleur === "rose"
        ? (couleurBouteille = "bg-bouteille_rose")
        : "bg-bouteille";

    return (
        <>
            <div
                className="flex flex-col justify-center items-center  rounded-lg bg-gris cursor-pointer"
                onClick={handleClick}
            >
                {bottle.type === "vide" ? (
                    <div className=" bg-gris w-full rounded-full flex justify-center items-center">
                        <PlusCircle className="w-3/4 h-3/4 text-bouteille" />
                    </div>
                ) : (
                    <div
                        className={clsx(
                            "h-6 w-6 sm:h-10 sm:w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20 m-1 sm:mt-2 sm:ml-2 sm:mr-2 rounded-full flex justify-center items-center",
                            `${couleurBouteille}`
                        )}
                    >
                        <div
                            className={clsx(
                                `${colorBouchon}`,
                                "h-3 w-3 sm:h-5 sm:w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full bg-fond"
                            )}
                        ></div>
                    </div>
                )}
                <p className="hidden md:block text-[10px] xl:text-sm text-center xl:pt-1">
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
