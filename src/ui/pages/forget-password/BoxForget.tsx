import { ForgetFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import FormForget from "./FormForget";
import { useToggle } from "../../../hooks/useToggle";
import { sendEmailToResetPassword } from "../../../api/Authentification";
import { toast } from "react-toastify";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const BoxForget = () => {
    const [rooter, setRooter] = useState(false);
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
    } = useForm<ForgetFormType>();

    const onSubmit: SubmitHandler<ForgetFormType> = async (formData) => {
        setIsLoading(true);
        handleResetPassword(formData);
    };

    const handleResetPassword = async ({ email }: ForgetFormType) => {
        const { error } = await sendEmailToResetPassword(email);

        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }

        toast.success("Un mail de réinitialisation a été envoyé", {
            autoClose: 2000,
        });
        setIsLoading(false);
        reset();
        setRooter(true);
    };

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-card">
                {rooter ? (
                    <Navigate to="/connexion" replace={true} />
                ) : (
                    <FormForget
                        form={{
                            errors,
                            control,
                            register,
                            handleSubmit,
                            onSubmit,
                            isLoading,
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default BoxForget;
