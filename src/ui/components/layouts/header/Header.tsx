import { useAuth } from "../../../../context/AuthUserContext";
import { useNavigate } from "react-router-dom";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
    const { authUser } = useAuth();
    const navigate = useNavigate();
    let scrAvatar: string = "";
    let onBoardingisCompleted = false

    if (authUser) {
        scrAvatar = authUser.userDocument.photoURL;
        onBoardingisCompleted = authUser.userDocument.onBoardingisCompleted;
    }

    const handleHome = () => {
        navigate("/container-racks");
    };

    return (
        <HeaderView
            handleHome={handleHome}
            scrAvatar={scrAvatar}
            onBoardingisCompleted={onBoardingisCompleted}
        />
    );
};

export default Header;
