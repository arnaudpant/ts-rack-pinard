import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "@/types/RacksTypes";
import BottlesDrinkView from "./BottlesDrinkView";
import useUpdateRacks from "../../../hooks/useUpdateRacks";

const BottlesDrink: React.FC = () => {
    const { authUser } = useAuth();
    const { deletedBottleDrink } = useUpdateRacks();

    const bottlesDrink: Bottle[] = authUser?.userDocument.bottlesDrink ?? [];

    const handleDelete = (id: string) => {
        deletedBottleDrink(id);
    };

    return (
        <BottlesDrinkView
            bottlesDrink={bottlesDrink}
            handleDelete={handleDelete}
        />
    );
};

export default BottlesDrink;
