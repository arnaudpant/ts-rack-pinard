import { createPortal } from "react-dom";
import { Bottle } from "../../../../types/RacksTypes";
import { Heart, X } from "lucide-react";

type Props = {
    bottle: Bottle;
    handleClick: () => void;
};

const ModalBottle = ({ bottle, handleClick }: Props) => {
    return createPortal(
        <>
            {/* FOND */}
            <div
                className="absolute top-0 left-0 bottom-0 right-0 bg-vin100 opacity-50"
                onClick={() => handleClick()}
            ></div>
            {/* MODAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-72 bg-fond text-center shadow-md z-20">
                <div className="absolute top-2 right-2 h-6 w-6 z-10 cursor-pointer" onClick={()=> handleClick()}>
                    <X />
                </div>
                <div className="mb-1">
                    {bottle.appellation && (
                        <h2 className="text-3xl font-bold pt-8">
                            {bottle.appellation.toUpperCase()}
                        </h2>
                    )}

                    <p className="text-xs pb-4">
                        {bottle.couleur} {bottle.gout}
                    </p>
                    <h3 className="text-xl font-semibold pb-2">
                        {bottle.exploitation}
                    </h3>
                    <p>{bottle.millesime}</p>
                </div>

                <div className="mb-4">
                    <h3>{bottle.cuvee}</h3>
                    <p>{bottle.pays?.toUpperCase()}</p>
                </div>

                <div className="text-sm mb-4">
                    {bottle.achat && <p>Date achat: {bottle.achat}</p>}
                    <p>Prix: {bottle.prix}€</p>
                </div>

                <div className="mb-4">
                    <p className="text-xs pb-2">A consommer avec:</p>
                    <div className="flex gap-4 justify-center">
                        {bottle.accords?.map((accord, index) => (
                            <p key={index} className="text-xs">
                                {accord}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 my-4">
                    <div className="flex gap-4">
                        <button className="w-32 px-4 py-2 bg-vin600 text-vin50 rounded-full">
                            Editer
                        </button>
                        <button className="w-32 px-4 py-2 bg-vin600 text-vin50 rounded-full">
                            Consommer
                        </button>
                    </div>
                    <div className="mx-auto">
                        <button className="p-3 bg-vin600 text-vin50 rounded-full">
                            <Heart className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default ModalBottle;
