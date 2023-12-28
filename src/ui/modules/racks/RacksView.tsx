import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import { Rack } from "@/types/RacksTypes";
import RackSoloView from "./modal/RackSoloView";

const RacksView = () => {
    const { authUser } = useAuth();
    const [listOfRacks, setListOfRacks] = useState<Rack[] | []>([]);

    useEffect(() => {
        authUser.userDocument.racks.length > 0 &&
            setListOfRacks(authUser.userDocument.racks);
    }, [authUser]);

    return (
        <div className="flex justify-center items-center">
            {authUser.userDocument.racks.length > 0 && (
                <div className="">
                    {listOfRacks.map((rack) => (
                        <RackSoloView rack={rack} key={rack.idrack} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RacksView;
