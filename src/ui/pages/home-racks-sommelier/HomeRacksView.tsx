import { useState } from "react";
import RacksTrue from "./RacksTrue";
import RacksFalse from "./RacksFalse";
import AddRackModal from "../../modules/modal/AddRackModal";

type Props = {
    numberRacks: number;
};

const HomeRacksView = ({ numberRacks }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

     const RackComponent = numberRacks === 0 ? RacksFalse : RacksTrue;

    return (
        <>
            {isModalOpen && <AddRackModal handleClick={toggleModal} />}
            <div
                className={`flex-col items-center min-h-[calc(100vh-${
                    numberRacks === 0 ? "118" : "234"
                }px)]`}
            >
                <RackComponent handleClick={toggleModal} />
            </div>
        </>
    );
};

export default HomeRacksView;
