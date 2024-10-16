

type Props = {
    handleClick: () => void;
};

const RacksTrue = ({ handleClick }: Props) => {
    return (
        <div className="container mx-auto flex flex-col justify-between items-center">
            <div className="py-4">
                <button
                    className="text-vin600 bg-vin/30 hover:bg-vin/80 hover:text-fond px-4 py-1 rounded-full shadow-sm"
                    onClick={() => handleClick()}
                >
                    Ajouter un rack
                </button>
            </div>
            <div className="h-[calc(100vh-296px)] w-full bg-sommelier bg-no-repeat bg-bottom bg-contain"></div>
        </div>
    );
};

export default RacksTrue;
