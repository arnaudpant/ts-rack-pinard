import { Bottle, Rack } from "../../../../types/RacksTypes";
import { useNavigate } from "react-router-dom";
import BottlePinardDemo from "./BottlePinardDemo";

type Props = {
    dataDemoRacks: Rack;
};

const DemoView = ({ dataDemoRacks }: Props) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center w-full ">
            <div className="flex flex-col items-center w-full px-2 pt-4 mb-10">
                {dataDemoRacks && (
                    <div className="bg-gris_fonce p-2 grid grid-cols-4 gap-1 w-full max-w-screen-md">
                        {dataDemoRacks.bottles.map((bottle: Bottle) => (
                            <BottlePinardDemo
                                bottle={bottle}
                                key={bottle.id}
                                nbrColums={3}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button
                    className="px-4 py-2 bg-vin text-fond rounded-full"
                    onClick={() => navigate("/")}
                >
                    Accueil
                </button>
            </div>
        </div>
    );
};

export default DemoView;
