import { useEffect, useState } from "react";
import { fakeRack } from "../../api/fakeRack";
import DemoView from "../components/rack/demonstration/DemoView";
import { Rack } from "@/types/RacksTypes";

const Demonstration = () => {
    const [dataDemoRacks, setDataDemoRacks] = useState<Rack | null>(null);

    useEffect(() => {
        localStorage.setItem("rackDemo", JSON.stringify(fakeRack.racks));
        const storedData = localStorage.getItem("rackDemo");

        storedData && setDataDemoRacks(JSON.parse(storedData));
    }, []);

    return (
        <div className="flex flex-col justify-start items-center h-[calc(100vh-64px)]">
            <h2 className="text-xl text-vin800 text-center mb-2 pt-6">
                Liste de vos racks à pinard
            </h2>
            <div className="container mx-auto py-2 flex justify-center flex-wrap gap-2">
                <button className="bg-vin text-fond px-4 py-1 rounded-full">
                    Rack demo
                </button>
            </div>
            {dataDemoRacks && <DemoView dataDemoRacks={dataDemoRacks[0]} />}
        </div>
    );
};

export default Demonstration;
