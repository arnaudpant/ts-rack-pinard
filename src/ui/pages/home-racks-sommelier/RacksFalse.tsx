
type Props = {
    handleClick: () => void;
};

const RacksFalse = ({ handleClick }: Props) => {
    return (
        <div className="flex flex-col items-center gap-4 px-2 py-4">
            <h2 className="text-2xl md:text-3xl text-center">
                Bienvenu dans votre cave à vin !
            </h2>
            <h3 className="text-lg md:text-xl text-center">
                Il semblerait que vous n'ayez pas encore de racks à pinard
            </h3>

            <div
                className=" mt-10 py-1 px-4 bg-vin text-fond rounded-full cursor-pointer shadow-md"
                onClick={handleClick}
            >
                AJOUTER UN RACK
            </div>
        </div>
    );
};

export default RacksFalse;
