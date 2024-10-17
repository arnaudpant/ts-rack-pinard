import { useAuth } from "../../../context/AuthUserContext";
import { useLocation } from "react-router-dom";
import { Rack } from "@/types/RacksTypes";
import RackSoloView from "./rack/RackSoloView";

const RackId: React.FC = () => {
    const location = useLocation();
    const { authUser } = useAuth();
    const rackId = location.state as string;

    const rack = authUser?.userDocument.racks.find(
        (rackItem: Rack) => rackItem.idrack === rackId
    );

    if (!rack) {
        return <p className="py-6 px-2 text-xl text-vin400">Rack non trouvé</p>;
    }

    return (
        <div className="flex flex-col justify-start items-center min-h-[calc(100vh-120px)]">
            <RackSoloView rack={rack} key={rack.idrack} />
        </div>
    );
};

export default RackId;
