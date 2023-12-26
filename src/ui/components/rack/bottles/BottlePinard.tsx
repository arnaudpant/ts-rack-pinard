import { Bottle } from "../../../../types/RacksTypes";
import { PlusCircle } from 'lucide-react';
import clsx from "clsx";
import ModalBottle from "../modal/ModalBottle";
import { useState } from "react";

type Props = {
    bottle: Bottle
}

const BottlePinard = ({ bottle }: Props) => {

    const [modalShow, setModalShow] = useState(false)

    const handleClick = () => {
        setModalShow(v => !v)
    }
    console.log(bottle.couleur )

    let colorBouchon = "bg-bouteille"
    bottle.couleur === "rouge" ? colorBouchon = 'bg-vin_rouge' :
    bottle.couleur === "blanc" ? colorBouchon = 'bg-vin_blanc' :
    bottle.type === "petillant" ? colorBouchon = 'bg-vin_champagne' :
    bottle.type === "champagne" ? colorBouchon = 'bg-vin_champagne' :
    bottle.couleur === "rose" ? colorBouchon = 'bg-vin_rose' :
    "bg-bouteille"

    let couleurBouteille = "bg-bouteille"
    bottle.couleur === "blanc" ? couleurBouteille = 'bg-bouteille_blanc' :
    bottle.type === "petillant" ? couleurBouteille = 'bg-bouteille_champagne' :
    bottle.type === "champagne" ? couleurBouteille = 'bg-bouteille_champagne' :
    bottle.couleur === "rose" ? couleurBouteille = 'bg-bouteille_rose' :
    "bg-bouteille"

    return (
        <div className="h-16 w-16 md:h-28 md:w-28 bg-gris flex flex-col justify-center items-center rounded-lg cursor-pointer" onClick={handleClick}>
            {
                bottle.type === 'vide' ? (
                    <div className="h-10 w-10 md:h-20 md:w-20 bg-gris rounded-full flex justify-center items-center "><PlusCircle className="w-16 h-16 text-bouteille" /></div>
                )
                    :
                    (<div className={clsx("h-10 w-10 md:h-20 md:w-20 rounded-full flex justify-center items-center", `${couleurBouteille}`)}>
                        <div className={clsx(`${colorBouchon}`, "h-5 w-5 md:h-10 md:w-10 rounded-full bg-fond")}></div>
                    </div>)
            }
            <p className="text-xs text-center md:pt-1">{bottle.appellation}</p>
            {
                modalShow && bottle.type !== 'vide' && <ModalBottle bottle={bottle} />
            }
        </div>
    );
};

export default BottlePinard;
