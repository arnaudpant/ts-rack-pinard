import sommelier from "/src/assets/sommelier.png";
import ListOfRacks from "../../../ui/components/bandeauRack/ListOfRacks";

const RacksView = () => {

    return (
        <div className="flex flex-col justify-between items-center h-[calc(100vh-64px)]">
            <ListOfRacks />
            <div>
                <img src={sommelier} alt="" />
            </div>
        </div>
    );
};

export default RacksView;
