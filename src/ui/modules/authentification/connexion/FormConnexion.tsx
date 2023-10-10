import { FormsType } from "@/types/Forms";
import Input from "../../../design-syst/formulaire/Input";
import ButtonForm from "../../../design-syst/formulaire/ButtonForm";
import { Link } from "react-router-dom";


interface Props {
    form: FormsType
}

const FormConnexion = ({ form }: Props) => {
    const { register, handleSubmit, onSubmit, isLoading, errors } = form
    
    
    return (
        <>
            <h2 className="text-center text-2xl font-bold pb-1">Connexion</h2>
            <p className="text-sm pb-3">Pas encore de compte ? <Link to="/inscription" className="text-vin">Inscription</Link></p>
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

                <label htmlFor="password" className='pb-1' >Mot de passe</label>
                <Input
                    type="password"
                    id="password"
                    isLoading={isLoading}
                    placeholder="Entrez votre mot de passe"
                    register={register}
                    errors={errors}
                    />
                
                <ButtonForm isLoading={isLoading}>
                    Se connecter
                </ButtonForm>
            </form>
        </>
    );
};

export default FormConnexion;