import { RegisterFormType } from "@/types/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
// import FormConnexion from "./FormConnexion";
import FormRegister from "./FormRegister";

const BoxConnexion: React.FC = () => {
    const isLoading: boolean = false

    // React Hook Form
    const { handleSubmit, control, formState: { errors }, register, setError, reset } = useForm<RegisterFormType>()

    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        console.log(formData)
    }

    return (
        <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-md">
            {/* <FormConnexion form={
                { errors, control, register, handleSubmit, onSubmit, isLoading }
            } /> */}
            <FormRegister form={
                { errors, control, register, handleSubmit, onSubmit, isLoading }
            } />
        </div>
    );
};

export default BoxConnexion;