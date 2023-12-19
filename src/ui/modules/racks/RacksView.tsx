import { useAuth } from "../../../context/AuthUserContext";


const RacksView = () => {

    const { authUser } = useAuth()

    return (
        <div className="flex justify-center items-center">
            {
                authUser.userDocument.racks.length > 0 &&
                (
                    <div className="">
                        <h2>RackView</h2>
                    </div>
                )
            }

        </div>
    );
};

export default RacksView;