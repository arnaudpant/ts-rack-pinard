import clsx from "clsx";
import { useEffect, useState } from "react";
import BottlePinard from "../components/rack/BottlePinard";
import { Rack, Bottle } from "@/types/RacksTypes";
import { getDemoRack } from "@/hooks/useFirebaseDemo";


const Demo = () => {

    const [dataDemoRacks, setDataDemoRacks] = useState<Rack | null>(null);
    const [loadingRacks, setLoadingRacks] = useState<boolean>(true);


    useEffect(() => {
        setLoadingRacks(true)
        getDemoRack()
        setLoadingRacks(false)
    }, []);



    return (
        <>
            {
                dataDemoRacks ? (<h1 className="text-3xl text-center py-4">Bienvenue sur le rack de {`${dataDemoRacks.name}`}</h1>) :
                    (<h1 className="text-3xl text-center py-4">Ceci est le rack de test</h1>)
            }
            <div className="container mx-auto flex justify-center">
                {
                    dataDemoRacks?.column && (
                        <div className={clsx("m-4 bg-gris_fonce p-2", `grid grid-cols-4 gap-2`)}>
                            {
                                dataDemoRacks?.column && dataDemoRacks.bottles.map((bottle: Bottle, index) => (
                                    <BottlePinard bottle={bottle} key={index} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Demo;