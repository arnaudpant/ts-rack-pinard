import { Rack } from "@/types/RacksTypes";
import { NavLink } from "react-router-dom";

type Props = {
    rack: Rack;
};

const ButtonRackSelected = ({ rack }: Props) => {

    return (
        <button>
            <NavLink
                to={`/rack/${rack.idrack}`}
                state={rack.idrack}
                className={({ isActive, isPending }) =>
                    isPending
                        ? "text-vin600 hover:bg-vin hover:text-fond px-4 py-1 border-2 border-vin hover:border-vin300 rounded-full"
                        : isActive
                        ? "bg-vin text-fond px-4 py-1 border-2 border-vin rounded-full"
                        : "px-4 py-1 border-2 border-vin hover:bg-vin hover:text-fond hover:border-vin rounded-full"
                }
            >
                {rack.rackName}
            </NavLink>
        </button>
    );
};

export default ButtonRackSelected;

