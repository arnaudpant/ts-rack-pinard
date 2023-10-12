import { firebaseSignOutUser } from "../../api/Authentification";
import { toast } from "react-toastify";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const UserProfile = () => {

    const [rooter, setRooter] = useState(false)

    const handleSignOutUser = async () => {
        const { error } = await firebaseSignOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        setRooter(true)
        console.log("disconnected")
    }

    return (
        <div className="absolute top-2 right-2">
            <button onClick={() => handleSignOutUser()} className="px-4 py-2 bg-fond_vert rounded-full text-fond shadow-md">Disconnect</button>
            {
                rooter && (<Navigate to="/" replace={true} />)
            }
        </div>
    );
};

export default UserProfile;