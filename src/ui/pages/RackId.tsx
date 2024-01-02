import { useAuth } from "../../context/AuthUserContext";
import { useLocation } from "react-router-dom";
import ListOfRacks from "../components/bandeauRack/ListOfRacks";
import { useEffect, useState } from "react";
import { Rack } from "@/types/RacksTypes";
import RackSoloView from "../modules/racks/modal/RackSoloView";


const RackId = () => {
    const location = useLocation();
    const { authUser } = useAuth();
    const { state } = location;
    const [rack, setRack] = useState<Rack>()

    useEffect(() => {
        const rackToShow = authUser.userDocument.racks.filter(
            (rackFilter: Rack) => rackFilter.idrack === state
        );
        rackToShow && setRack(rackToShow[0]);
    }, [state]);

    return (
        <div className="flex flex-col justify-start items-center">
            <ListOfRacks state={state} />
            {
                rack && <RackSoloView rack={rack} key={rack.idrack} />
            }
        </div>
    );
};

export default RackId;
