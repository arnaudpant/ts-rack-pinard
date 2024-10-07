import { useAuth } from "../../../../context/AuthUserContext";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
    const { authUser } = useAuth();
    let scrAvatar: string = "";
    let onBoardingisCompleted = false;

    if (authUser) {
        scrAvatar = authUser.userDocument.photoURL;
        onBoardingisCompleted = authUser.userDocument.onBoardingisCompleted;
    }



    return (
        <HeaderView
            scrAvatar={scrAvatar}
            onBoardingisCompleted={onBoardingisCompleted}
        />
    );
};

export default Header;
