import { firebaseSignOutUser } from "../../api/Authentification";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfile = () => {

    const handleSignOutUser = async () => {
        const { error } = await firebaseSignOutUser()
        if (error) {
            toast.error(error.message)
            return
        } else {
            console.log("disconnected")
            return (
                <Navigate to="/home" replace={true} />
            )
        }
    }

    return (
        <div className="absolute top-2 right-2">
            <button onClick={()=>handleSignOutUser()} className="px-4 py-2 bg-fond_vert rounded-full text-fond shadow-md">Disconnect</button>
        </div>
    );
};

export default UserProfile;