import { useAuth } from "../../../context/AuthUserContext";
import Avatar from "../../../ui/design-syst/avatar/Avatar";

const Header: React.FC = () => {

    const {authUser} = useAuth()

    const scrAvatar = authUser.userDocument.photoURL

    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">
            <h1 className="text-2xl md:text-4xl py-2">🍾   RACKS A PINARD   🍷</h1>
            <div className="absolute right-4 cursor-pointer">
                {
                    scrAvatar && (<Avatar src={scrAvatar} width="14" height="14" />)                   
                }

            </div>
            
            
        </header>
    );
};

export default Header;