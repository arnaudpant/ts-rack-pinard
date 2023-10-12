import { RegisterFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormRegister from "./FormRegister.tsx";
import { firebaseCreateUser } from "../../../../api/Authentification.tsx";
import { toast } from 'react-toastify';
import { useToggle } from "../../../../hooks/useToggle.tsx";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const BoxInscription: React.FC = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle()
    const [rooter, setRooter] = useState(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<RegisterFormType>()

    /** Etape 2
     * On lance en async handleCreateUserAuth avec en param email et password
     * On await le return de firebaseCreateUser
     * firebaseCreateUser return soit une error soit les data de l'user si la creation dans firebase a reussi
     * Si return error on arrete le loading
    */
    const handleCreateUserAuth = async ({ email, password }: RegisterFormType) => {
        const { error } = await firebaseCreateUser(email, password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success('Bienvenu dans votre cave à pimard')
        setIsLoading(false)
        setRooter(true)
        reset
    }

    /** Etape 1 
     * Au submit on passe le btn en loader
     * On recupere email et password
     * Si le password fait moins de 6 caracteres mini on affiche un msg sans appel a Firebase
     * Sinon on lance handleCreateUserAuth avec formData = (email, password)
    */
    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        setIsLoading(true)
        const { password } = formData;

        if (password.length < 6) {
            setError("password", {
                type: "manuel",
                message: "Le mot de passe doit comporter 6 caractères minimum"
            })
            setIsLoading(false)
            return
        }
        handleCreateUserAuth(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-card">
                {
                    rooter ? (<Navigate to="/container-racks" replace={true} />) : (<FormRegister form={{ errors, control, register, handleSubmit, onSubmit, isLoading }} />)
                }
            </div>
        </>
    );
};

export default BoxInscription;