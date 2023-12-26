import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import AddRackModal from "./modal/AddRackModal";
import { Rack } from "@/types/RacksTypes";
import { ShieldPlus } from "lucide-react";
import RackSoloView from "./modal/RackSoloView";

const RacksView = () => {
    const { authUser } = useAuth();
    const [modalShow, setModalShow] = useState(false);
    const [listOfRacks, setListOfRacks] = useState<Rack[] | []>([]);
    const handleClick = () => {
        setModalShow((v) => !v);
    };

    useEffect(() => {
        authUser.userDocument.racks.length > 0 &&
            setListOfRacks(authUser.userDocument.racks);
    }, []);

    //console.log(listOfRacks);
    return (
        <div className="flex justify-center items-center">
            {authUser.userDocument.racks.length > 0 && (
                <div className="">

                    {
                        listOfRacks.map((rack) => (
                            <RackSoloView rack={rack} key={rack.idrack} />
                        ))
                    }

                    <div className="absolute bottom-4">
                        <button
                            className="flex justify-center items-center h-20 w-20 rounded-full bg-vin text-3xl text-fond text-center shadow-sm"
                            onClick={handleClick}
                        >
                            <ShieldPlus className="h-10 w-10" />
                        </button>
                    </div>
                </div>
            )}

            {modalShow && <AddRackModal handleClick={handleClick} />}
        </div>
    );
};

export default RacksView;
