import Avatar from "../../../design-syst/avatar/Avatar";
import clsx from "clsx";
import { Home, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { firebaseSignOutUser } from "../../../../api/Authentification";
import { toast } from "react-toastify";

type Props = {
    onBoardingisCompleted: boolean;
    scrAvatar: string;
};

const HeaderView = ({
    onBoardingisCompleted,
    scrAvatar,
}: Props) => {
    const navigate = useNavigate()

    const handleDisconnect = () => {
        firebaseSignOutUser();
        navigate('/')
        toast.success("A bientôt dans vos racks à pinard", {
            autoClose: 2000,
        });
    };

    return (
        <header className="relative flex items-center justify-center h-16 bg-vin text-fond ">
            <h1 className="text-2xl md:text-3xl py-2">RACKS A PINARD 🍾</h1>
            {/* BTN HOME */}
            <div className="absolute top-4 left-4">
                <div
                    data-testid="btn-back-home"
                    onClick={()=>navigate("/home-racks")}
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
                    data-testid="avatar"
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "w-10 h-10"
                    )}
                >
                    {scrAvatar == "" ? (
                        <Avatar
                            src="/avatar-default.png"
                            width="10"
                            height="10"
                        />
                    ) : (
                        <div className="hidden md:block">
                            <Avatar src={scrAvatar} width="10" height="10" />
                        </div>
                    )}
                </div>
                <div
                    className={clsx(
                        !onBoardingisCompleted && `hidden`,
                        "cursor-pointer w-10 h-10 flex justify-center"
                    )}
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu className="h-10 w-10" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link to="/">
                                <DropdownMenuItem className="cursor-pointer">
                                    Accueil
                                </DropdownMenuItem>
                            </Link>
                            <Link to="/user-infos">
                                <DropdownMenuItem className="cursor-pointer">
                                    Mon compte
                                </DropdownMenuItem>
                            </Link>
                            <Link to="/user-data">
                                <DropdownMenuItem className="cursor-pointer">
                                    Toutes mes bouteilles
                                </DropdownMenuItem>
                            </Link>
                            <Link to="/bottles-drink">
                                <DropdownMenuItem className="cursor-pointer">
                                    Container à verre
                                </DropdownMenuItem>
                            </Link>
                            <Link to="/cave-virtuelle">
                                <DropdownMenuItem className="cursor-pointer">
                                    Cave virtuelle
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                                onClick={handleDisconnect}
                                className="text-vin cursor-pointer"
                            >
                                Déconnexion
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default HeaderView;
