import { Bottle } from "@/ui/pages/Demo";
import clsx from "clsx";

type Props = {
    bottle: Bottle
}

const BottlePinard = ({ bottle }: Props) => {

    let colorBouchon = "bg-bouteille"
    bottle.type === "rouge" ? colorBouchon = 'bg-vin_rouge' :
    bottle.type === "blanc" ? colorBouchon = 'bg-vin_blanc' :
    bottle.type === "petillant" ? colorBouchon = 'bg-vin_champagne' :
    bottle.type === "champagne" ? colorBouchon = 'bg-vin_champagne' :
    bottle.type === "rose" ? colorBouchon = 'bg-vin_rose' :
    "bg-bouteille"

    let couleurBouteille = "bg-bouteille"
    bottle.type === "blanc" ? couleurBouteille = 'bg-bouteille_blanc' :
    bottle.type === "petillant" ? couleurBouteille = 'bg-bouteille_champagne' :
    bottle.type === "champagne" ? couleurBouteille = 'bg-bouteille_champagne' :
    bottle.type === "rose" ? couleurBouteille = 'bg-bouteille_rose' :
    "bg-bouteille"

    return (
        <div className="h-16 w-16 md:h-28 md:w-28 bg-gris flex flex-col justify-center items-center rounded-lg cursor-pointer">
            {
                bottle.type === null ? (
                    <div className="h-12 w-12 md:h-20 md:w-20 bg-gris rounded-full"></div>
                )
                    :
                    (<div className={clsx("h-10 w-10 md:h-20 md:w-20 rounded-full flex justify-center items-center", `${couleurBouteille}`)}>
                        <div className={clsx(`${colorBouchon}`, "h-5 w-5 md:h-10 md:w-10 rounded-full bg-fond")}></div>
                    </div>)
            }
            <p className="text-xs text-center">{bottle.aoc}</p>
        </div>
    );
};

export default BottlePinard;
