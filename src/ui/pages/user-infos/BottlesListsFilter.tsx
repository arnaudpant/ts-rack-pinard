import { useAuth } from "../../../context/AuthUserContext";
import { Bottle } from "../../../types/RacksTypes";
import BottlesListsFilterView from "./BottlesListsFilterView";

const BottlesListsFilter = () => {
    const { authUser } = useAuth();
    const fullBottles: Bottle[] = authUser
        ? authUser.userDocument.racks.flatMap((rack) => rack.bottles)
        : [];
    if (!authUser) {
        throw new Error("Utilisateur non authentifié : authUser est requis.");
    }
    // Fonction pour créer une clé unique pour chaque bouteille
    const getBottleKey = (bottle: Bottle): string => {
        return `${bottle.nom}-${bottle.type}-${bottle.millesime}-${bottle.couleur}`;
    };

    // Grouper les bouteilles identiques
    const groupedBottles = fullBottles.reduce((acc, bottle) => {
        const key = getBottleKey(bottle);
        if (!acc[key]) {
            acc[key] = { ...bottle, count: 1 };
        } else {
            acc[key].count += 1;
        }
        return acc;
    }, {} as Record<string, Bottle & { count: number }>);

    // Convertir l'objet groupé en tableau
    const uniqueBottles = Object.values(groupedBottles);

    return (
        <BottlesListsFilterView uniqueBottles={uniqueBottles} />
    );
};

export default BottlesListsFilter;
