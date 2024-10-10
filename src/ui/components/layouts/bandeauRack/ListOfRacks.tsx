import ButtonRackSelected from "./ButtonRackSelected";
import { useAuth } from "../../../../context/AuthUserContext";

const ListOfRacks = () => {
    const { authUser } = useAuth();
    const listOfRacks = authUser?.userDocument.racks || [];

    if (!authUser) {
        return null; 
    }

    if (listOfRacks.length === 0) {
        return <p>Vous n'avez pas encore de racks.</p>;
    }

    return (
        <div className="flex flex-col items-center pt-5">
            <h2 className="text-xl text-vin800 text-center pb-2">
                Liste de vos racks:
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-2 py-2 px-4">
                {listOfRacks
                    .map((rack) => (
                        <ButtonRackSelected rack={rack} key={rack.idrack} />
                    ))
                    .sort()}
            </div>
        </div>
    );
};

export default ListOfRacks;
