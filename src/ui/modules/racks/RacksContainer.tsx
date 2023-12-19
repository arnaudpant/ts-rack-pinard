import { useAuth } from "../../../context/AuthUserContext";
import RacksView from "./RacksView";


const RacksContainer = () => {
    const { authUser } = useAuth()

    return (
        <>
            {
                authUser.userDocument.racks.length === 0 ? (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-3xl">Bienvenu dans votre cave à vin !</h2>
                        <h3 className="text-xl">Il semblerait que vous n'ayez pas encore de racks à pinard</h3>
                        <div className=" mt-10 py-1 px-4 bg-vin text-fond rounded-full cursor-pointer shadow-md">AJOUTER UN RACK</div>
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