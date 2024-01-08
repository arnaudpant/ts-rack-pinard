import sommelier from "/src/assets/sommelier.png";
import ListOfRacks from "../../../ui/components/bandeauRack/ListOfRacks";
import { useState } from "react";
import AddRackModal from "./modal/AddRackModal";

const RacksView = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow((v) => !v);
    };

    return (
        <div className="flex flex-col justify-between items-center min-h-[calc(100vh-120px)]">
            <ListOfRacks />
            <div className="mx-auto py-4">
                <button
                    className="bg-vin600 text-fond px-4 py-1  hover:bg-vin50  hover:text-vin700  rounded-full"
                    onClick={() => handleClick()}
                >
                    Ajouter un rack
                </button>
            </div>
            <div>
                <img
                    src={sommelier}
                    alt="sommelier avec un verre et une bouteille dans chaque main"
                />
            </div>
            {modalShow && <AddRackModal handleClick={handleClick} />}
        </div>
    );
};

export default RacksView;
