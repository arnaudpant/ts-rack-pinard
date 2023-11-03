import { useAuth } from "../../context/AuthUserContext";
import { Navigate } from 'react-router-dom';

const ContainerRacks = () => {

    const { authUser } = useAuth()

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
                                    <h3 className="text-xl text-vin text-center mt-8">See you soon</h3>
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