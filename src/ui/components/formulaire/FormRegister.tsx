import { FormsType } from "@/types/Forms";

interface Props {
    form: FormsType
}

const FormRegister = ({form }: Props) => {
    const {errors, control, register, handleSubmit, onSubmit, isLoading} = form

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

                <label htmlFor="password" className='pb-1' >Code a 3 chiffres</label>
                <input
                    type="text"
                    id="password"
                    required
                    placeholder="Entrez un mot de passe"
                    className="mb-6 h-8 rounded pl-2"
                    disabled={isLoading}
                    {...register("code", {required: {value: true, message: "Ce champ est requis"}})}
                />
                // 28min
                <input type="submit" className="h-10 bg-vin text-fond font-bold text-lg rounded-lg shadow-sm" />

            </form>
        </>
    );
};

export default FormRegister;