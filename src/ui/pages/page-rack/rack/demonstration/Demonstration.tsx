import { fakeRack } from "../../../../../api/fakeRack";
import { Rack } from "@/types/RacksTypes";
import RackSoloView from "../RackSoloView";
import { Link } from "react-router-dom";

const Demonstration = () => {
    const dataDemoRacks: Rack = fakeRack;

    return (
        <>
            <div className="pt-5 flex flex-col items-center">
                <h2 className="text-xl text-vin800 text-center pb-2">
                    Rack de démonstration
                </h2>
                <div className="py-2 px-4">
                    <div className="container mx-auto flex justify-center flex-wrap gap-2">
                        <Link
                            to="/"
                            className="text-vin600 hover:bg-vin hover:text-fond px-4 py-1 border-2 border-vin rounded-full"
                        >
                            Accueil
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center min-h-[calc(100vh-120px)]">
                <RackSoloView rack={dataDemoRacks} key={dataDemoRacks.idrack} />
            </div>
        </>
    );
};

export default Demonstration;
