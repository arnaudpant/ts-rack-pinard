import Avatar from "../../../design-syst/avatar/Avatar";
import clsx from "clsx";
import { LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    handleHome: () => void;
    onBoardingisCompleted: boolean;
    scrAvatar: string
};

const HeaderView = ({
    handleHome,
    onBoardingisCompleted,
    scrAvatar,
}: Props) => {
    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">
            <h1 className="text-2xl md:text-3xl py-2">RACKS A PINARD 🍾</h1>
            {/* BTN HOME */}
            <div className="absolute top-4 left-4">
                <div
                    data-testid="btn-back-home"
                    onClick={handleHome}
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "cursor-pointer"
                    )}
                >
                    <LayoutGrid className="text-fond hover:scale-125" />
                </div>
            </div>

            {/* AVATAR */}
            <div className="absolute right-4">
                <div
                    data-testid="avatar"
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "cursor-pointer w-10 h-10"
                    )}
                >
                    {scrAvatar == "" ? (
                        <Link to="/user-infos">
                            <Avatar
                                src="/avatar-default.png"
                                width="10"
                                height="10"
                            />
                        </Link>
                    ) : (
                        <Link to="/user-infos">
                            <Avatar src={scrAvatar} width="10" height="10" />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default HeaderView;