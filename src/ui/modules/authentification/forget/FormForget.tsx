import { FormsType } from "@/types/Forms";
import Input from "../../../design-syst/formulaire/Input";
import ButtonForm from "../../../design-syst/formulaire/ButtonForm";

interface Props {
    form: FormsType
}

const FormForget = ({ form }: Props) => {
    const { register, handleSubmit, onSubmit, isLoading, errors } = form
    
    
    return (
        <>
            <h2 className="text-center text-2xl">Obtenir votre mot de passe</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >

                <label htmlFor="email" className='pb-1' >E-mail</label>
                <Input
                    type="email"
                    id="email"
                    isLoading={isLoading}
                    placeholder="Entrez votre email"
                    register={register}
                    errors={errors}
                />
                
                <ButtonForm isLoading={isLoading}>
                    Envoyer
                </ButtonForm>
            </form>
        </>
    );
};

export default FormForget;