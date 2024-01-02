import { useAuth } from "../../context/AuthUserContext";
import { Navigate } from 'react-router-dom';
import RacksContainer from "../modules/racks/RacksContainer";

const ContainerRacks = () => {

    const { authUser } = useAuth()

    const onBoardingisCompleted: boolean = authUser?.userDocument.onBoardingisCompleted


    return (
        <>
            {
                authUser !== null ?
                    (
                        onBoardingisCompleted ?
                            (<>
                                <div className="container mx-auto flex-col items-center">
                                        <RacksContainer />

                                </div>
                            </>)
                            :
                            (<Navigate to="/boarding" replace={true} />)
                    )
                    :
                    (<Navigate to="/" replace={true} />)
            }
        </>
    );
};

export default ContainerRacks;