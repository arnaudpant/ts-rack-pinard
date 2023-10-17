import useFirebaseAuth from "../hooks/useFirebaseAuth"
import { UserDocument } from "../types/User"
import { createContext, useContext } from "react"

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
})

interface Props {
    children: React.ReactNode
}

export function AuthUserProvider({ children }: Props) {

    const auth = useFirebaseAuth()

    return (
        <authUserContext.Provider value={{
            authUser: auth.authUser as {
                uid: string;
                email: string;
                displayName: string;
                emailVerified: boolean;
                photoURL: string;
                userDocument: UserDocument;
            },
            authUserIsLoading: auth.authUserIsLoading
        }}>
            {children}
        </authUserContext.Provider >
    )
}

export const useAuth = () => useContext(authUserContext)