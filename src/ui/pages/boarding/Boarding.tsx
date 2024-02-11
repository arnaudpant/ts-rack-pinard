import OnBoardingContainer from "./onboarding/OnBoardingContainer";
import { useAuth } from "../../../context/AuthUserContext";
import { Navigate } from "react-router-dom";

const Boarding = () => {
    const { authUser } = useAuth();

    return (
        <>
            {authUser !== null ? (
                <OnBoardingContainer />
            ) : (
                <Navigate to="/" replace={true} />
            )}
        </>
    );
};

export default Boarding;
