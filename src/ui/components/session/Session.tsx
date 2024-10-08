/** CONTEXT */
import { useAuth } from "../../../context/AuthUserContext";
/** COMPONENTS */
import Spinner from "../spinner/Spinner";

interface Props {
    children: React.ReactNode;
}

const Session = ({ children }: Props) => {
    const { authUserIsLoading } = useAuth();

    if (!authUserIsLoading) {
        return <>{children}</>;
    }
    return <Spinner />;
};

export default Session;
