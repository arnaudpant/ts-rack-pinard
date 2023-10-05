interface Props {
    type?: "text" | "email" | "password",
    id: string,
    isLoading: boolean,
    placeholder: string,
    register: any,
    errors: any,
    errorMsg?: string
    required?: boolean
    isAutoCompleted?: boolean
}

const Input = ({ type = "text", id, isLoading, placeholder, register, errors, errorMsg = "Ce champs est obligatoire", required = true, isAutoCompleted = false }: Props) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="mb-6 h-8 rounded pl-2 focus:outline-none focus:ring-1 focus:ring-vin"
            disabled={isLoading}
            autoComplete={isAutoCompleted ? "on" : "off"}
            {...register(id, { required: { value: required, message: errorMsg } })}
        />
    );
};

export default Input;