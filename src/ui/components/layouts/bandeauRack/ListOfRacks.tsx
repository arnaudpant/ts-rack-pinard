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
                            Liste de vos racks à pinard
                        </h2>
                    <div className="border border-vin50 rounded-xl py-2 px-4">
                        <div className="container mx-auto flex justify-center flex-wrap gap-2">
                            {listOfRacks.map((rack) => (
                                <ButtonRackSelected
                                    rack={rack}
                                    key={rack.idrack}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListOfRacks;
