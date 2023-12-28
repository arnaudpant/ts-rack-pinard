import { createPortal } from "react-dom";
import { Bottle } from "../../../../types/RacksTypes";
import { X } from "lucide-react";
import useUpdateRacks from "../../../../hooks/useUpdateRacks";

type Props = {
    bottle: Bottle;
    handleClick: () => void;
};

const ModalBottle = ({ bottle, handleClick }: Props) => {

    const {deleteBottle} = useUpdateRacks()

    const handleDeleteBottle = (bottle: Bottle) => {
        deleteBottle(bottle)
        handleClick()
    }

    return createPortal(
        <>
            {/* FOND */}
            <div
                className="absolute top-0 left-0 bottom-0 right-0 bg-vin100 opacity-50"
                onClick={() => handleClick()}
            ></div>
            {/* MODAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-72 bg-fond text-center shadow-md z-20">
                <div
                    className="absolute top-2 right-2 h-6 w-6 z-10 cursor-pointer"
                    onClick={() => handleClick()}
                >
                    <X />
                </div>

                {/* PARTIE PRINCIPALE ! */}
                <div className="mt-6 mb-1">
                    {/* APPELLATION ! */}
                    {bottle.appellation && (
                        <h2 className="text-3xl font-bold pt-8">
                            {bottle.appellation.toUpperCase()}
                        </h2>
                    )}
                    {/* COULEUR */}
                    {bottle.couleur && (
                        <p className="text-xs pb-4 pt-1">
                            {bottle.couleur} {bottle.gout}
                        </p>
                    )}
                    {/* EXPLOITATION */}
                    {bottle.exploitation && (
                        <h3 className="text-xl font-semibold pb-2">
                            {bottle.exploitation}
                        </h3>
                    )}
                    {/* MILLESIME */}
                    {bottle.millesime && (
                        <h3 className="text-2xl font-semibold pb-2">
                            {bottle.millesime}
                        </h3>
                    )}
                </div>
                {/* PARTIE SECONDAIRE ! */}
                <div className="mt-6 mb-1">
                    {/* CUVEE */}
                    {bottle.cuvee && (
                        <div className="mb-4">
                            <h3>Cuvée: {bottle.cuvee}</h3>
                        </div>
                    )}
                    <p>{bottle.pays?.toUpperCase()}</p>
                    {/* DATE ACHAT */}
                    {bottle.achat && <p>Date achat: {bottle.achat}</p>}
                    {/* PRIX */}
                    {bottle.prix && <p className="pt-4 text-lg">Prix: {bottle.prix} €</p>}
                    
                </div>

                {/* <div className="mb-4">
                    <p className="text-xs pb-2">A consommer avec:</p>
                    <div className="flex gap-4 justify-center">
                        {bottle.accords?.map((accord, index) => (
                            <p key={index} className="text-xs">
                                {accord}
                            </p>
                        ))}
                    </div>
                </div> */}

                <div className="flex flex-col gap-4 my-4">
                    <div className="flex gap-4">
                        {/* <button className="w-32 px-4 py-2 bg-vin600 text-vin50 rounded-full">
                            Editer
                        </button> */}
                        <button className="w-32 px-4 py-2 bg-vin600 text-vin50 rounded-full" onClick={()=> handleDeleteBottle(bottle)}>
                            Consommer
                        </button>
                    </div>
                    {/* <div className="mx-auto">
                        <button className="p-3 bg-vin600 text-vin50 rounded-full">
                            <Heart className="h-8 w-8" />
                        </button>
                    </div> */}
                </div>
            </div>
        </>,
        document.body
    );
};

export default ModalBottle;
