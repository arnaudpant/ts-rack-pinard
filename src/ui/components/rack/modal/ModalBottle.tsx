import { createPortal } from "react-dom";
import { Bottle } from "../../../../types/RacksTypes";

type Props = {
    bottle: Bottle,
}

const ModalBottle = ({ bottle }: Props) => {
    return createPortal(
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-vin100 flex items-center justify-center">
            <div className="w-72 bg-fond text-center shadow-md">
                <div className="mb-1">
                    <h2 className="text-3xl font-bold pt-4">{bottle.appellation.toUpperCase()}</h2>
                    <p className="text-xs pb-4">{bottle.couleur}</p>
                    <h3 className="text-xl font-semibold pb-2">{bottle.exploitation}</h3>
                    <p>{bottle.millesime}</p>
                </div>

                <div className="mb-4">
                    <h3>{bottle.cuvee}</h3>
                    <p>{bottle.pays?.toUpperCase()}</p>
                </div>

                <div className="text-sm mb-4">
                    {
                        bottle.achat && <p>Date achat: {bottle.achat}</p>
                    }
                    <p>Prix: {bottle.prix}€</p>
                    
                </div>

                <div className="mb-4">
                    <p className="text-xs pb-2">A consommer avec:</p>
                    <div className="flex gap-4 justify-center">
                        {
                            bottle.accords?.map((accord, index) => (
                                <p key={index} className="text-xs">{accord}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>, document.body

    )



};

export default ModalBottle;