import { Bottle } from "../../../types/RacksTypes";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import useUpdateRacks from "../../../hooks/useUpdateRacks";
import AddBootleForBuyLaterView from "./AddBootleForBuyLaterView";
import { useNavigate } from "react-router-dom";

const AddBootleForBuyLater = () => {
    const { addBottleForBuyLater } = useUpdateRacks();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const onSubmit = (data: Bottle) => {
        const newBootleForLater: Bottle = {
            id: nanoid(),
            nom: data.nom,
            millesime: data.millesime,
            appellation: data.appellation,
            exploitation: data.exploitation,
            cepage: null,
            pays: null,
            type: data.type,
            couleur: data.couleur,
            saveur: null,
            corps: null,
            potentiel: null,
            status: null,
            degre: null,
            accords: null,
            prix: null,
            achat: null,
            rackId: "favoris",
            index: 1,
            drink: null,
            favoris: false,
        };
        addBottleForBuyLater(newBootleForLater);
        navigate("/cave-virtuelle");
    };

    return (
        <AddBootleForBuyLaterView onSubmit={onSubmit} />
    );
};

export default AddBootleForBuyLater;
