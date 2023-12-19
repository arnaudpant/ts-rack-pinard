import { Bottle, Rack } from "../../../../types/RacksTypes";
import BottlePinard from "../bottles/BottlePinard";


type Props = {
    dataDemoRacks: Rack,
}

const DemoView = ({ dataDemoRacks }: Props) => {
    let donnees

    switch (dataDemoRacks.columns) {
        case 1 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-1 gap-1'
        break

        case 2 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-2 gap-1'
        break

        case 3 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-3 gap-1'
        break

        case 4 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-4 gap-1'
        break

        case 5 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-5 gap-1'
        break

        case 6 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-6 gap-1'
        break

        case 7 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-7 gap-1'
        break

        case 8 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-8 gap-1'
        break

        case 9 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-9 gap-1'
        break

        case 10 : donnees = 'm-4 bg-gris_fonce p-2 grid grid-cols-10 gap-1'
        break

    }

    return (
        <div>
            <h1 className="text-3xl text-center py-4">Bienvenue sur le rack de {`${dataDemoRacks.rackName}`}</h1>
            <div className="container mx-auto flex justify-center">
                {
                    dataDemoRacks.columns === 3 &&
                        <div className={`${donnees}`}>
                            {
                                dataDemoRacks.bottles.map((bottle: Bottle) => (
                                    <BottlePinard bottle={bottle} key={bottle.id} /> 
                                ))
                            }
                        </div> 
                }

            </div>
        </div>
    );
};

export default DemoView;