// FIREBASE

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormRegister from "./FormRegister";
import { useState } from "react";

const BoxInscription: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<RegisterFormType>()


    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        await Firebase.initinitializeApp()
        setIsLoading(true)
        console.log(formData)

        const { email, password } = formData

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setIsLoading(false)
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });



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