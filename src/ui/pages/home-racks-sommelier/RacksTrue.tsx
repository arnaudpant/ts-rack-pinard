

type Props = {
    handleClick: () => void;
};

const RacksTrue = ({ handleClick }: Props) => {
    return (
        <div className="container mx-auto flex flex-col justify-between items-center">
            <div className="py-4">
                <button
                    className="text-vin600 hover:bg-vin hover:text-fond px-4 py-1 border-2 border-vin hover:border-vin rounded-full"
                    onClick={() => handleClick()}
                >
                    Ajouter un rack
                </button>
            </div>
            <div className="h-[calc(100vh-304px)] w-full bg-sommelier bg-no-repeat bg-bottom bg-contain"></div>
        </div>
    );
};

export default RacksTrue;
