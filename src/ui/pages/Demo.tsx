// import clsx from "clsx";
import { useEffect, useState } from "react";
import { Rack } from "../../types/RacksTypes";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import Spinner from "../components/spinner/Spinner";
import DemoView from "../components/rack/DemoView";


const Demo = () => {

    const [dataDemoRacks, setDataDemoRacks] = useState<Rack | null>(null);
    //const [loadingRacks, setLoadingRacks] = useState<boolean>(true);



    useEffect(() => {

        const getDemoRack = async () => {
            const docRef = doc(db, "demo", "4dyJMgMiFSHBJW5YoiA4");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDataDemoRacks(docSnap.data().racks[0])
            } else {
                console.log("Error Rack demonstration");
            }
        }
        
        getDemoRack()


    }, []);


    return (
        <>
            {
                dataDemoRacks ? (
                    <DemoView dataDemoRacks={dataDemoRacks} />
                ) :
                    (<Spinner />)
            }
        </>
    );
};

export default Demo;