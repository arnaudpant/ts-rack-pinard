import { fakeRack } from "../api/fakeRack";
import { Bottle, Rack } from "@/types/RacksTypes";
import { useState } from "react";

const useDemoRack = (newBootle: Bottle) => {
    console.log(newBootle)
    const [locaStorageDemoRacks, setLocaStorageDemoRacks] = useState<Rack | null>(null);

    localStorage.setItem("rackDemo", JSON.stringify(fakeRack.racks));
    const storedData = localStorage.getItem("rackDemo");
    storedData && setLocaStorageDemoRacks(JSON.parse(storedData));

    
    const updateLocalStrorageRack = (bottleDemo: Bottle) => {
        /** 1. Recuperation index de la nouvelle bouteille */
        const bottleIndex = locaStorageDemoRacks?.bottles.filter((bottle) => {
            bottle.id === bottleDemo.id
        })
        console.log(bottleIndex)

        /** 2. Mise a jour de la case avec nouvelle bouteille */
        if (locaStorageDemoRacks !== null){
            //locaStorageDemoRacks.bottles[bottleIndex] = bottleDemo
        }
    }
    
    return {
        locaStorageDemoRacks,
        updateLocalStrorageRack
    }
}

export default useDemoRack