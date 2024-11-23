import ButtonRackSelected from "./ButtonRackSelected";
import { useAuth } from "../../../../context/AuthUserContext";

const ListOfRacks = () => {
    const { authUser } = useAuth();
    const listOfRacks = authUser?.userDocument.racks || [];

    if (!authUser) {
        return null
    }
        return (
            <div className="flex flex-col items-center pt-5">
                <h1 className="text-xl md:text-2xl px-2 mb-4 text-center">
                    La gestion de cave à vin simplifiée: votre collection à
                    portée de main !
                </h1>
                <h2 className="text-lg text-vin800 text-center">
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
