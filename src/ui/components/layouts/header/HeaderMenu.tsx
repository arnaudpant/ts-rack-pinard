import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { firebaseSignOutUser } from "../../../../api/Authentification";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "../../../../ui/design-syst/avatar/Avatar";

type Props = {
    scrAvatar: string;
};

const HeaderMenu = ({ scrAvatar }: Props) => {
    const navigate = useNavigate();
    const handleDisconnect = () => {
        firebaseSignOutUser();
        navigate("/");
        toast.success("A bientôt dans vos racks à pinard", {
            autoClose: 2000,
        });
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu className="h-10 w-10" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <div className="my-4 flex justify-center" data-testid="avatar">
                        {scrAvatar == "" ? (

                                <Avatar
                                    src="/avatar-default.png"
                                    width="16"
                                    height="16"
                                />

                        ) : (

                                <Avatar
                                    src={scrAvatar}
                                    width="16"
                                    height="16"
                                />

                        )}
                    </div>
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
        </>
    );
};

export default HeaderMenu;

