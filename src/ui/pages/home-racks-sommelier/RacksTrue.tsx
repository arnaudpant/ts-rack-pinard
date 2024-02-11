import sommelier from "/src/assets/sommelier.png";

type Props = {
    handleClick: () => void;
};

const RacksTrue = ({ handleClick }: Props) => {
    return (
        <div className="flex flex-col justify-between items-center min-h-[calc(100vh-218px)]">
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
        </div>
    );
};

export default RacksTrue;
