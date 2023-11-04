import { useAuth } from "../../context/AuthUserContext";
import { Navigate } from 'react-router-dom';
import RacksContainer from "../modules/racks/RacksContainer";

const ContainerRacks = () => {

    const { authUser } = useAuth()
    console.log("racks", authUser.userDocument.racks)

    const onBoardingisCompleted: boolean = authUser?.userDocument.onBoardingisCompleted


    return (
        <>
            {
                authUser !== null ?
                    (
                        onBoardingisCompleted ? (<>
                            <div className="container mx-auto flex-col items-center">
                                <div className="mt-10">
                                    <h1 className="text-3xl text-center">
                                        Liste de vos racks
                                    </h1>
                                    <RacksContainer />
                                </div>
                            </div>
                        </>) : (<Navigate to="/boarding" replace={true} />)
                    )
                    :
                    (<Navigate to="/" replace={true} />)
            }
        </>
    );
};

export default ContainerRacks;