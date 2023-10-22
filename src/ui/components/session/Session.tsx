import { useAuth } from "../../../context/AuthUserContext";
import Spinner from "../spinner/Spinner";


interface Props {
    children: React.ReactNode,
    sessionStatus?: string
}

const Session = ({children, sessionStatus}: Props) => {
    const { authUserIsLoading } = useAuth()

    if (!authUserIsLoading) {
        return <>{children}</>
    }
    return (
        <>
            <Spinner />
        </>
    );
};

export default Session;