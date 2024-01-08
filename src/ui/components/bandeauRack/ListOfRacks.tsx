import { useAuth } from "../../../context/AuthUserContext";
import ButtonRackSelected from "./ButtonRackSelected";
import { useEffect, useState } from "react";
import { Rack } from "@/types/RacksTypes";

type Props = {
    state?: string | null
}

const ListOfRacks = ({state}: Props) => {
    const { authUser } = useAuth();
    const [listOfRacks, setListOfRacks] = useState<Rack[] | []>([]);

    useEffect(() => {
        authUser.userDocument.racks.length > 0 &&
            setListOfRacks(authUser.userDocument.racks);
    }, [authUser]);
    return (
        <div className="pt-10">
            {authUser.userDocument.racks.length > 0 && (
                <div className="border border-vin50 rounded-xl py-2 px-4">
                    <h2 className="text-xl text-vin800 text-center pb-2">
                        Liste de vos racks à pinard
                    </h2>
                    <div className="container mx-auto py-2 flex justify-center flex-wrap gap-2">
                        {listOfRacks.map((rack) => (
                            <ButtonRackSelected rack={rack} key={rack.idrack} state={state} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListOfRacks;
