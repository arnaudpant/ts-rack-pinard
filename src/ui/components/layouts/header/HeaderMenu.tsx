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
import { listMenunavigation } from "../../../../api/navigation";

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
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Menu className="h-10 w-10" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <div className="m-4 flex justify-center" data-testid="avatar">
                    {scrAvatar == "" ? (
                        <Avatar
                            src="/avatar-default.png"
                            width="16"
                            height="16"
                        />
                    ) : (
                        <Avatar src={scrAvatar} width="16" height="16" />
                    )}
                </div>
                <DropdownMenuLabel className="text-center">Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {listMenunavigation.map((menuNavigation) => (
                    <Link to={menuNavigation.link}>
                        <DropdownMenuItem className="cursor-pointer pr-10">
                            {menuNavigation.name}
                        </DropdownMenuItem>
                    </Link>
                ))}
                <DropdownMenuItem
                    onClick={handleDisconnect}
                    className="text-vin cursor-pointer pr-10"
                >
                    Déconnexion
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default HeaderMenu;

