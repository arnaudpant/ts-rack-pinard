import { useAuth } from "../../../context/AuthUserContext";
import CaveVirtuelleView from "./CaveVirtuelleView";
import useUpdateRacks from "../../../hooks/useUpdateRacks";

const CaveVirtuelle = () => {
    const { authUser } = useAuth();
    const { deletedBottleFavoris } = useUpdateRacks();

    const handleDelete = (id: string) => {
        deletedBottleFavoris(id);
    };

    const bottlesForLater = authUser?.userDocument.bottlesFavoris ?? [];

    return (
        <CaveVirtuelleView
            bottlesForLater={bottlesForLater}
            handleDelete={handleDelete}
        />
    );
};

export default CaveVirtuelle;
