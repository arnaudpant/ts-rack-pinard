import clsx from "clsx";
import { useEffect, useState } from "react";
import BottlePinard from "../components/rack/BottlePinard";

type Racks = {
    rackName: string,
    rackId: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}

export type Bottle = {
    id: string,
    type: "rouge" | "blanc" | "rose" | "petillant" | "champagne" | "autre",
    domaine: string,
    aoc: string,
    millesime: number,
    achat: number,
    commentaire: string
}


const Demo = () => {

    const [dataRacks, setDataRacks] = useState<Racks | null>(null);
    //const [loadingRacks, setLoadingRacks] = useState<boolean>(false);


    useEffect(() => {
        async function callAPIDemo() {
            const url = 'src/api/racksDemo.json'
            const fetcher = await fetch(url)
            const fetcherJson = await fetcher.json()
            if (fetcherJson) {
                setDataRacks(fetcherJson.racks[0])
            }
        }
        callAPIDemo()

    }, []);



    return (
        <div>
            {
                dataRacks ? (<h1 className="text-3xl text-center py-4">Bienvenue sur le rack de {`${dataRacks.rackName}`}</h1>) :
                    (<h1 className="text-3xl text-center py-4">Ceci est le rack de test</h1>)
            }
            {
                dataRacks && (
                    <div className={clsx(" m-4",`grid grid-cols-${dataRacks?.columns} gap-2 bg-vin p-2`)}>
                        {
                            dataRacks && dataRacks.bottles.map((bottle, index) => (
                                <BottlePinard bottle={bottle} key={index} />
                            ))
                        }
                    </div>

                )
            }
        </div>
    );
};

export default Demo;