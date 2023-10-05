import { FormsType } from "@/types/Forms";
import Input from "../../design-syst/formulaire/Input";
import ButtonForm from "./ButtonForm";


interface Props {
    form: FormsType
}

const FormRegister = ({ form }: Props) => {
    const { register, handleSubmit, onSubmit, isLoading, errors, control } = form
    
    
    return (
        <>
            <h2 className="text-center text-2xl">Inscription</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >

                <label htmlFor="email" className='pb-1' >E-mail</label>
                <Input
                    type="email"
                    id="email"
                    isLoading={isLoading}
                    placeholder="Entrez un email valide"
                    register={register}
                    errors={errors}
                />

                <label htmlFor="password" className='pb-1' >Mot de passe</label>
                <Input
                    type="password"
                    id="password"
                    isLoading={isLoading}
                    placeholder="Entrez un mot de passe"
                    register={register}
                    errors={errors}
                    />
                
                <ButtonForm isLoading={isLoading}>
                    S'inscrire
                </ButtonForm>
            </form>
        </>
    );
};

export default FormRegister;