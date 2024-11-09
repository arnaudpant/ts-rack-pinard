import clsx from "clsx";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

type Props = {
    onBoardingisCompleted: boolean;
    scrAvatar: string;
};

const HeaderView = ({ onBoardingisCompleted, scrAvatar }: Props) => {
    const navigate = useNavigate();

    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">
            <div className="text-2xl md:text-3xl py-2">RACKS A PINARD 🍾</div>
            {/* BTN HOME */}
            <div className="absolute top-4 left-4">
                <div
                    data-testid="btn-back-home"
                    onClick={() => navigate("/home-racks")}
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "cursor-pointer"
                    )}
                >
                    <Home className="text-fond hover:scale-125" />
                </div>
            </div>

            {/* AVATAR */}
            <div className="absolute right-4 flex md:gap-4">
                <div
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "cursor-pointer w-10 h-10 flex justify-center"
                    )}
                >
                    <HeaderMenu scrAvatar={scrAvatar} />
                </div>
            </div>
        </header>
    );
};

export default HeaderView;
