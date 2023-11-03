import { toast } from 'react-toastify';
import { firebaseSignOutUser } from '../../api/Authentification';
import { Unplug } from 'lucide-react';
import { useAuth } from "../../context/AuthUserContext";
import { Navigate } from 'react-router-dom';

const ContainerRacks = () => {

    const { authUser } = useAuth()

    const onBoardingisCompleted: boolean = authUser?.userDocument.onBoardingisCompleted


    const handleDisconnect = async () => {
        const { error } = await firebaseSignOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("A bientôt dans vos racks à pinard")
    }

    return (
        <>
            {
                authUser !== null ?
                    (
                        onBoardingisCompleted ? (<>
                            <div className='absolute top-4 left-4 cursor-pointer' onClick={handleDisconnect}>
                                <Unplug className='text-fond hover:scale-125' />
                            </div>
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