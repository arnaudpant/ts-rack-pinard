import RacksTrue from "./RacksTrue";
import RacksFalse from "./RacksFalse";
import { useNavigate } from "react-router-dom";

type Props = {
    numberRacks: number;
};

const HomeRacksView = ({ numberRacks }: Props) => {
    const navigate = useNavigate();

    const handleAddRack = () => {
        navigate("/add-rack");
    };

    const RackComponent = numberRacks === 0 ? RacksFalse : RacksTrue;

    return (
        <div
            className={`flex-col items-center min-h-[calc(100vh-${
                numberRacks === 0 ? "232" : "272"
            }px)]`}
            data-testid="rack-width"
        >
            <RackComponent handleClick={handleAddRack} />
        </div>
    );
};

export default HomeRacksView;
