import { Bottle } from "@/ui/pages/Demo";

type Props = {
    bottle: Bottle
}

const BottlePinard = ({bottle}: Props) => {
   //console.log(bottle)
    return (
        <div className="h-20  bg-vin_blanc flex justify-center rounded-lg">
            <p>{bottle.id}</p>
        </div>
    );
};

export default BottlePinard;
