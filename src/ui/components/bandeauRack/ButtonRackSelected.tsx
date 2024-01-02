import { Rack } from "@/types/RacksTypes";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
    rack: Rack;
    state?: string | null;
};

const ButtonRackSelected = ({ rack, state }: Props) => {

    return (
        <button
            className={clsx(
                state && state === rack.idrack
                    ? "bg-vin text-fond"
                    : "text-vin600 hover:bg-vin300 hover:text-fond",
                "px-4 py-1 border-2 border-vin rounded-full"
            )}
        >
            <Link to={`/rack/${rack.idrack}`} state={rack.idrack}>
                {rack.rackName}
            </Link>
        </button>
    );
};

export default ButtonRackSelected;

