/** HOOKS */
import { useToggle } from "../../../../hooks/useToggle";
import { useState } from "react";
/** COMPONENTS */
import { ConnexionFormType } from "@/types/Forms";
import FormConnexion from "./FormConnexion";
/** FIREBASE */
import { firebaseSignInUser } from "../../../../api/Authentification.tsx";
/** LIBRARY */
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";


const BoxConnexion: React.FC = () => {
    // HOOKS
    const [userConnected, setUserConnected] = useState<boolean>(false)
    const { value: isLoading, setValue: setIsLoading } = useToggle()
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<ConnexionFormType>()

    /** Etape 2
    * On lance en async handleSignInUser avec en param email et password
    * On await le return de firebaseSignInUser
    * firebaseSignInUser return soit une error soit les data de l'user si la connexion  dans est validée
    * Si return error on arrete le loading
   */
    const handleSignInUser = async ({ email, password }: ConnexionFormType) => {
        const { error } = await firebaseSignInUser(email, password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success('Bienvenu dans votre cave à pimard')
        setIsLoading(false)
        reset()
        setUserConnected(true)
    }

    /** Etape 1 
     * Au submit on passe le btn en loader
     * On recupere le password
     * Si le password fait moins de 6 caracteres mini on affiche un msg sans appel a Firebase
     * Sinon on lance handleSignInUser avec formData = (email, password)
    */
    const onSubmit: SubmitHandler<ConnexionFormType> = async (formData) => {
        setIsLoading(true)
        const { password } = formData
        if (password.length < 6) {
            setError("password", {
                type: "manuel",
                message: "Le mot de passe doit comporter 6 caractères minimum"
            })
            setIsLoading(false)
            return
        }
        handleSignInUser(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-card">
                {
                    userConnected ? (<Navigate to="/container-racks" replace={true} />) : (<FormConnexion form={{ errors, control, register, handleSubmit, onSubmit, isLoading }} />)
                }
            </div>
        </>
    );
};

export default BoxConnexion;