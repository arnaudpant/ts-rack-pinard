// FIREBASE
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormRegister from "./FormRegister.tsx";
import { useState } from "react";
// import { auth } from "../../../../firebase/firebase.config.ts";
import { firebaseCreateUser } from "../../../../api/Authentification.tsx";

const BoxInscription: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError } = useForm<RegisterFormType>()
    // , reset

    /** Etape 2
     * On lance en async handleCreateUserAuth avec en param email et password
     * On await le return de firebaseCreateUser
     * firebaseCreateUser return soit une error soit les data de l'user si la creation dans firebase a reussi
     * Si return error on arrete le loading
    */
    const handleCreateUserAuth = async ({ email, password }: RegisterFormType) => {
        const { error, data } = await firebaseCreateUser(email, password)
        if (error) {
            setIsLoading(false)
            console.log(error)
        } else {
            console.log(data)
            setIsLoading(false)

        }
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

        if (password.length <= 5) {
            setError("password", {
                type: "manuel",
                message: "Le mot de passe doit comporter 6 caractères minimum"
            })
            return
        }
        handleCreateUserAuth(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-lg">
                <FormRegister form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
        </>
    );
};

export default BoxInscription;