import { ConnexionFormType } from "@/types/Forms";
import { useToggle } from "../../../../hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import FormConnexion from "./FormConnexion";
import { toast } from 'react-toastify';
import { firebaseSignInUser } from "../../../../api/Authentification.tsx";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const BoxConnexion: React.FC = () => {
    const [userConnected, setUserConnected] = useState<boolean>(false)
    
    const {value: isLoading, setValue: setIsLoading} = useToggle()

    const handleSignInUser = async ({email, password}: ConnexionFormType) => {
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

    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<ConnexionFormType>()
    
    const onSubmit: SubmitHandler<ConnexionFormType> = async (formData) => {
        setIsLoading(true)
        const {password} = formData
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