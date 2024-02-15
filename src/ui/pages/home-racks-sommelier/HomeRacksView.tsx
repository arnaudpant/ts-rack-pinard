import { useState } from "react";
import RacksTrue from "./RacksTrue";
import AddRackModal from "../../modules/modal/AddRackModal";
import RacksFalse from "./RacksFalse";

type Props = {
    numberRacks: number;
};

const HomeRacksView = ({ numberRacks }: Props) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow((v) => !v);
    };

    return (
        <>
            {modalShow && <AddRackModal handleClick={handleClick} />}
            {numberRacks === 0 ? (
                <div className="flex-col items-center min-h-[calc(100vh-118px)]">
                    <RacksFalse handleClick={handleClick} />
                </div>
            ) : (
                <div className="flex-col items-center min-h-[calc(100vh-218px)]">
                    <RacksTrue handleClick={handleClick} />
                </div>
            )}
        </>
    );
};

export default HomeRacksView;
