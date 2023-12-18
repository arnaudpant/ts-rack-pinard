/** FIREBASE */
import { db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const getDemoRack = async () => {

    const docRef = doc(db, "demo", "4dyJMgMiFSHBJW5YoiA4");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().racks[0]
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}