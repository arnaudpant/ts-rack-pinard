import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "@/types/RacksTypes";
import { useEffect, useState } from "react";
import BottlesDrinkView from "./BottlesDrinkView";
import useUpdateRacks from "../../../hooks/useUpdateRacks";

const BottlesDrink = () => {
    const { authUser } = useAuth();
    const { deletedBottleDrink } = useUpdateRacks();

    const [bottlesDrink, setBottlesDrink] = useState<Bottle[] | []>([]);

    const handleDelete = (id: string) => deletedBottleDrink(id);

    useEffect(() => {
        authUser && setBottlesDrink(authUser.userDocument.bottlesDrink);
    }, [authUser]);
    return (
        <BottlesDrinkView
            bottlesDrink={bottlesDrink}
            handleDelete={handleDelete}
        />
    );
};

export default BottlesDrink;
