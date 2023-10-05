import { FormsType } from "@/types/Forms";

interface Props {
    form: FormsType
}

const FormRegister = ({form }: Props) => {
    const {register, handleSubmit, onSubmit, isLoading, errors, control} = form

    return (
        <>
            <h2 className="text-center text-2xl">Inscription</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="email" className='pb-1' >E-mail</label>
                <input
                    type="email"
                    id="email"
                    required
                    placeholder="Entrez votre email"
                    className="mb-6 h-8 rounded pl-2"
                    disabled={isLoading}
                    {...register("email", {required: {value: true, message: "Ce champ est requis"}})}
                    autoComplete="off"
                />

                <label htmlFor="password" className='pb-1' >Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    required
                    placeholder="Entrez un mot de passe"
                    className="mb-6 h-8 rounded pl-2"
                    disabled={isLoading}
                    {...register("code", {required: {value: true, message: "Ce champ est requis"}})}
                />
                //TODO: Installer clsx pour isLoading = cursor-wait
                <input type="submit" className="h-10 bg-vin text-fond font-bold text-lg rounded-lg shadow-sm" />

            </form>
        </>
    );
};

export default FormRegister;