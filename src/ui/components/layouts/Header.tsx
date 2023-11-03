import clsx from "clsx";
import { useAuth } from "../../../context/AuthUserContext";
import Avatar from "../../../ui/design-syst/avatar/Avatar";
import { Unplug } from 'lucide-react';
import { toast } from 'react-toastify';
import { firebaseSignOutUser } from "../../../api/Authentification";

const Header: React.FC = () => {

    const {authUser} = useAuth()

    let scrAvatar: string = ""

    if(authUser?.userDocument.photoURL) {
        scrAvatar = authUser.userDocument.photoURL
    }

    const handleDisconnect = async () => {
        const { error } = await firebaseSignOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("A bientôt dans vos racks à pinard")
    }

    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">

            <h1 className="text-2xl md:text-4xl py-2">RACKS A PINARD 🍾🍷</h1>

            <div onClick={handleDisconnect} className={clsx(!authUser?.userDocument.onBoardingisCompleted && `hidden`, 'absolute top-4 left-4 cursor-pointer')}>
                <Unplug className='text-fond hover:scale-125' />
            </div>
            
            <div className={clsx(!authUser?.userDocument.onBoardingisCompleted && `hidden`, 'absolute right-4 cursor-pointer w-14 h-14')}>
                {
                    scrAvatar == "" ? (<Avatar src="/avatar-default.png" width="14" height="14"/>) : (<Avatar src={scrAvatar} width="14" height="14"/>)                   
                }
            </div>
            
            
        </header>
    );
};

export default Header;