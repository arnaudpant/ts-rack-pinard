import clsx from "clsx";
import { useAuth } from "../../../context/AuthUserContext";
import Avatar from "../../../ui/design-syst/avatar/Avatar";
import { Unplug } from 'lucide-react';
import { toast } from 'react-toastify';
import { firebaseSignOutUser } from "../../../api/Authentification";
import { Link, Navigate } from "react-router-dom";

const Header: React.FC = () => {

    const { authUser } = useAuth()

    let scrAvatar: string = ""

    if (authUser?.userDocument.photoURL) {
        scrAvatar = authUser.userDocument.photoURL
    }

    const handleDisconnect = async () => {
        const { error } = await firebaseSignOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("A bientôt dans vos racks à pinard")
        return (<Navigate to="/" replace={true}  />)
    }

    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">

            <h1 className="text-2xl md:text-3xl py-2">RACKS A PINARD 🍾</h1>
            {/* BTN DISCONNECT */}
            <div className="hidden sm:block absolute top-4 left-4">
                <div onClick={handleDisconnect} className={clsx(!authUser?.userDocument.onBoardingisCompleted && `hidden`, 'cursor-pointer')}>
                    <Unplug className='text-fond hover:scale-125' />
                </div>
            </div>

            {/* AVATAR */}
            <div className="absolute right-4">
                <div className={clsx(!authUser?.userDocument.onBoardingisCompleted && `hidden`, 'cursor-pointer w-10 h-10')}>
                    {
                        scrAvatar == "" ? (<Link to="/user-infos"><Avatar src="/avatar-default.png" width="10" height="10" /></Link>) : (<Link to="/user-infos"><Avatar src={scrAvatar} width="10" height="10" /></Link>)
                    }
                </div>
            </div>

        </header>
    );
};

export default Header;