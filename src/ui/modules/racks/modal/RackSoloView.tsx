import { Bottle, Rack } from "@/types/RacksTypes";
import BottlePinard from "../../../../ui/components/rack/bottles/BottlePinard";
import { useEffect, useState } from "react";

type Props = {
    rack: Rack;
};

const RackSoloView = ({ rack }: Props) => {
    const [classGrid, setClassGrid] = useState<string>("")

    useEffect(()=>{

        switch (rack.columns) {
            case 1:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-1 gap-1")
                break;
    
            case 2:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-2 gap-1")
                break;
    
            case 3:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-3 gap-1")
                break;
    
            case 4:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-4 gap-1")
                break;
    
            case 5:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-5 gap-1")
                break;
    
            case 6:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-6 gap-1")
                break;
    
            case 7:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-7 gap-1")
                break;
    
            case 8:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-8 gap-1")
                break;
    
            case 9:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-9 gap-1")
                break;
    
            case 10:
                setClassGrid("m-4 bg-gris_fonce p-2 grid grid-cols-10 gap-1")
                break;
        }

    },[rack])

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-vin800 text-center py-4">
                Rack: {`${rack.rackName}`}
            </h1>
            <div className="container mx-auto flex justify-center">
                {rack && classGrid !== "" && (
                    <div className={`${classGrid}`}>
                        {rack.bottles.map((bottle: Bottle) => (
                            <BottlePinard bottle={bottle} key={bottle.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RackSoloView;
