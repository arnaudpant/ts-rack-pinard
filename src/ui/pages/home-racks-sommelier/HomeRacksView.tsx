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
        <div className="container mx-auto flex-col items-center min-h-[calc(100vh-218px)]">
            {modalShow && <AddRackModal handleClick={handleClick} />}
            {numberRacks === 0 ? (
                <RacksFalse handleClick={handleClick} />
            ) : (
                <>
                    <RacksTrue handleClick={handleClick} />
                </>
            )}
        </div>
    );
};

export default HomeRacksView;
