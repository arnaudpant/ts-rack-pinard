import { RegisterFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormConnexion from "./FormConnexion";
import FormRegister from "./FormRegister";
import { useState } from "react";

const BoxConnexion: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<RegisterFormType>()

    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        setIsLoading(true)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-lg">
                <FormRegister form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-lg">
                <FormConnexion form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
        </>
    );
};

export default BoxConnexion;