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
        <>
            {authUser.userDocument.racks.length > 0 && (
                <div className="">
                    <h2 className="text-xl text-vin800 text-center mb-2 pt-10">
                        Liste de vos racks à pinard
                    </h2>
                    <div className="container mx-auto py-2 flex flex-wrap gap-2">
                        {listOfRacks.map((rack) => (
                            <ButtonRackSelected rack={rack} key={rack.idrack} state={state} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListOfRacks;
