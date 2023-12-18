import clsx from "clsx";
import { Bottle, Rack } from "../../../types/RacksTypes";
import BottlePinard from "./BottlePinard";
import { useEffect, useState } from "react";

type Props = {
    dataDemoRacks: Rack
}

const DemoView = ({ dataDemoRacks }: Props) => {
    const [numberOfColums, setNumberOfColums] = useState(0)
    useEffect(() => {
        setNumberOfColums(dataDemoRacks.columns)
    },[])

    return (
        <div>
            <h1 className="text-3xl text-center py-4">Bienvenue sur le rack de {`${dataDemoRacks.rackName}`}</h1>
            <div className="container mx-auto flex justify-center">
                {
                    numberOfColums !== 0 && (
                        <div className={clsx(`m-4 bg-gris_fonce p-2 grid gap-2 grid-cols-${numberOfColums}`)}>
                            {
                                dataDemoRacks.bottles.map((bottle: Bottle, index) => (
                                    <BottlePinard bottle={bottle} key={index} />
                                ))
                            }
                        </div> 
                    )
                }

            </div>
        </div>
    );
};

export default DemoView;