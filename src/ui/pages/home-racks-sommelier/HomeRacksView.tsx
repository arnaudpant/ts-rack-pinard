import RacksTrue from "./RacksTrue";
import RacksFalse from "./RacksFalse";


type Props = {
    numberRacks: number;
};

const HomeRacksView = ({ numberRacks }: Props) => {


    const toggleModal = () => {
        
    };

    const RackComponent = numberRacks === 0 ? RacksFalse : RacksTrue;

    return (
        <>
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
