import { Bottle } from "../../../types/RacksTypes";
import { useAuth } from "../../../context/AuthUserContext";
import FavorisBottlesView from "./FavorisBottlesView";
import useUpdateRacks from "../../../hooks/useUpdateRacks";



const FavorisBottles = () => {
    const { authUser } = useAuth();
    const { updateRacks } = useUpdateRacks();

    const allBottlesFavorisList: Bottle[] = [...authUser.userDocument.racks.flatMap((rack) => rack.bottles).filter((bottle) => bottle.favoris)]

    const handleRemoveBottleFromFavorisList = (bottle: Bottle) => {
        const BottlesFavorisDeleted: Bottle = {
            ...bottle,
            favoris: false,
        };
        updateRacks(BottlesFavorisDeleted, true);
    };
    
    
    return (
        <FavorisBottlesView
            allBottlesFavorisList={allBottlesFavorisList}
            handleRemoveBottleFromFavorisList={
                handleRemoveBottleFromFavorisList
            }
        />
    );
};

export default FavorisBottles;