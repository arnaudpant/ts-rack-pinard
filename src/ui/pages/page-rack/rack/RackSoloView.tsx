import { useLayoutEffect, useState } from "react";
import useUpdateRacks from "../../../../hooks/useUpdateRacks";
import { useNavigate } from "react-router-dom";
import { Bottle, Rack } from "@/types/RacksTypes";
import BottlePinard from "./bottles/BottlePinard";
import RackSoloInfos from "./RackSoloInfos";

type Props = {
    rack: Rack;
};

const RackSoloView: React.FC<Props> = ({ rack }) => {
    const [classGrid, setClassGrid] = useState<string>("");
    const { deletedRack } = useUpdateRacks();
    const navigate = useNavigate();

    const deletedThisRack = (id: string) => {
        deletedRack(id);
        navigate("/home-racks");
    };

    useLayoutEffect(() => {
        const gridClasses = {
            1: "grid-cols-1 max-w-screen-md",
            2: "grid-cols-2 max-w-screen-md",
            3: "grid-cols-3 max-w-screen-md",
            4: "grid-cols-4 max-w-screen-md",
            5: "grid-cols-5 max-w-screen-lg",
            6: "grid-cols-6 max-w-screen-lg",
            7: "grid-cols-7 max-w-screen-lg",
            8: "grid-cols-8 max-w-screen-xl",
            9: "grid-cols-9 max-w-screen-xl",
            10: "grid-cols-10 max-w-screen-2xl",
        };

        const columnClass =
            gridClasses[rack.columns as keyof typeof gridClasses] || "";
        setClassGrid(`bg-gris_fonce p-2 grid gap-1 w-full ${columnClass}`);
    }, [rack.columns]);

    return (
        <div className="flex flex-col items-center w-full px-2 pt-4 mb-10">
            <div className="flex justify-center w-full">
                {classGrid && (
                    <div className={classGrid} data-testid="bottlesArr">
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

                {rack.bottles.length > 0 && (
                    <RackSoloInfos bottles={rack.bottles} />
                )}
 
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
