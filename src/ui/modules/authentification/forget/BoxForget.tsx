import { ForgetFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormForget from "./FormForget";
import { useState } from "react";

const BoxForget = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register} = useForm<ForgetFormType>()
    // , setError, reset 
    const onSubmit: SubmitHandler<ForgetFormType> = async (formData) => {
        setIsLoading(true)
        console.log(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-lg">
                <FormForget form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
        </>
    );
};

export default BoxForget;