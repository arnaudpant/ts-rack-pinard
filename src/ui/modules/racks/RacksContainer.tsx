import { useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import RacksView from "./RacksView";
import AddRackModal from "./modal/AddRackModal";


const RacksContainer = () => {
    const { authUser } = useAuth()
    const [modalShow, setModalShow] = useState(false)
    const handleClick = () => {
        setModalShow(v => !v)
    }

    return (
        <>
            {
                authUser.userDocument.racks.length === 0 ? (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-3xl">Bienvenu dans votre cave à vin !</h2>
                        <h3 className="text-xl">Il semblerait que vous n'ayez pas encore de racks à pinard</h3>
                        
                        {
                            modalShow ? <AddRackModal handleClick={handleClick} /> : <div className=" mt-10 py-1 px-4 bg-vin text-fond rounded-full cursor-pointer shadow-md" onClick={handleClick}>AJOUTER UN RACK</div>
                        }
                    </div>
                ) :
                    (
                        <RacksView />
                    )
            }
        </>
    );
};

export default RacksContainer;