import { useEffect, useState } from "react";
import ButtonRackSelected from "./ButtonRackSelected";
import { Rack } from "@/types/RacksTypes";
import { useAuth } from "../../../../context/AuthUserContext";

const ListOfRacks = () => {
    const { authUser } = useAuth();
    const [listOfRacks, setListOfRacks] = useState<Rack[] | []>([]);

    useEffect(() => {
        authUser?.userDocument.racks.length > 0 &&
            setListOfRacks(authUser.userDocument.racks);
    }, [authUser]);

    return (
        <>
            {listOfRacks.length > 0 && authUser && (
                <div className="flex flex-col items-center pt-5">
                    <h2 className="text-xl text-vin800 text-center pb-2">
                        Liste de vos racks:
                    </h2>
                    <div className="flex justify-center items-center flex-wrap gap-2 py-2 px-4">
                        {listOfRacks.map((rack) => (
                            <ButtonRackSelected rack={rack} key={rack.idrack} />
                        )).sort()}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListOfRacks;
