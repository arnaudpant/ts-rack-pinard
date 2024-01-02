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
        <div className="flex flex-col justify-between items-center h-[calc(100vh-64px)]">
            <ListOfRacks />
            <div className="mx-auto">
                <button
                    className="bg-vin50 text-vin hover:bg-vin600  hover:text-fond px-4 py-1 border-2 border-vin rounded-full"
                    onClick={() => handleClick()}
                >
                    Ajouter un rack
                </button>
            </div>
            <div>
                <img src={sommelier} alt="" />
            </div>
            {modalShow && <AddRackModal handleClick={handleClick} />}
        </div>
    );
};

export default RacksView;
