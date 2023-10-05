import { ConnexionFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormConnexion from "./FormConnexion";
import { useState } from "react";

const BoxConnexion: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<ConnexionFormType>()

    const onSubmit: SubmitHandler<ConnexionFormType> = async (formData) => {
        setIsLoading(true)
        console.log(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-lg">
                <FormConnexion form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
        </>
    );
};

export default BoxConnexion;