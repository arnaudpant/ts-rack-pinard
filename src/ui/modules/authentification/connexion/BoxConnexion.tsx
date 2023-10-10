import { ConnexionFormType } from "@/types/Forms";
import { useToggle } from "../../../../hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import FormConnexion from "./FormConnexion";


const BoxConnexion: React.FC = () => {
    const {value: isLoading, toggle} = useToggle()

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register} = useForm<ConnexionFormType>()
    // , setError, reset 
    const onSubmit: SubmitHandler<ConnexionFormType> = async (formData) => {
        toggle()
        console.log(formData)
    }

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-card">
                <FormConnexion form={
                    { errors, control, register, handleSubmit, onSubmit, isLoading }
                } />
            </div>
        </>
    );
};

export default BoxConnexion;