import { useEffect, useState } from "react";
import useUpdateRacks from "../../../../hooks/useUpdateRacks";
import { useNavigate } from "react-router-dom";
import { Bottle, Rack } from "@/types/RacksTypes";
import BottlePinard from "./bottles/BottlePinard";
import RackSoloInfos from "./RackSoloInfos";

type Props = {
    rack: Rack;
};

const RackSoloView = ({ rack }: Props) => {
    const [classGrid, setClassGrid] = useState<string>("");
    const {deletedRack} = useUpdateRacks()

    const navigate = useNavigate()

    const deletedThisRack = (id: string) => {
        deletedRack(id)
        navigate("/home-racks");
    }

    useEffect(() => {
        switch (rack.columns) {
            case 1:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-1 gap-1 w-full max-w-screen-md"
                );
                break;

            case 2:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-2 gap-1 w-full max-w-screen-md"
                );
                break;

            case 3:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-3 gap-1 w-full max-w-screen-md"
                );
                break;

            case 4:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-4 gap-1 w-full max-w-screen-md"
                );
                break;

            case 5:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-5 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 6:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-6 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 7:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-7 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 8:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-8 gap-1 w-full max-w-screen-xl"
                );
                break;

            case 9:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-9 gap-1 w-full max-w-screen-xl"
                );
                break;

            case 10:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-10 gap-1 w-full max-w-screen-2xl"
                );
                break;
        }
    }, [rack]);

    return (
        <div className="flex flex-col items-center w-full px-2 pt-4 mb-10">
            {/* AFFICHAGE RACK */}
            <div className="flex justify-center w-full">
                {rack && classGrid !== "" && (
                    // Cases
                    <div className={`${classGrid}`}>
                        {rack.bottles.map((bottle: Bottle) => (
                            <BottlePinard
                                bottle={bottle}
                                key={bottle.id}
                                nbrColums={rack.columns}
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* INFOS RACK */}
            <div>
                {rack.bottles.length > 0 && (
                    <RackSoloInfos bottles={rack.bottles} />
                )}
            </div>
            {/* SUPPRESSION DU RACK */}
            <button
                className="text-vin600 hover:bg-vin mt-10 hover:text-fond px-4 py-1 border-2 border-vin hover:border-vin300 rounded-full"
                onClick={() => deletedThisRack(rack.idrack)}
            >
                Suppression du rack
            </button>
        </div>
    );
};

export default RackSoloView;
