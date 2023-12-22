import { useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import AddRackModal from "./modal/AddRackModal";


const RacksView = () => {

    const { authUser } = useAuth()
    const [modalShow, setModalShow] = useState(false)
    const handleClick = () => {
        setModalShow(v => !v)
    }

    return (
        <div className="flex justify-center items-center">
            {
                authUser.userDocument.racks.length > 0 &&
                (
                    <div className="">
                        <h2>RackView</h2>
                        <div>
                        <button className="h-10 w-10 rounded-full bg-vin text-3xl text-fond text-center" onClick={handleClick} >+</button>
                        </div>

                    </div>
                )
            }
            {
                modalShow && <AddRackModal handleClick={handleClick} />
            }

        </div>
    );
};

export default RacksView;