/** LIBRARY */
import clsx from "clsx"

interface Props {
    type?: "text" | "email" | "password",
    id: string,
    isLoading: boolean,
    placeholder: string,
    register: any,
    errors: any,
    errorMsg?: string,
    required?: boolean,
    isAutoCompleted?: boolean,
}

const Input = ({ type = "text", id, isLoading, placeholder, register, errors, errorMsg = "Ce champs est obligatoire", required = true, isAutoCompleted = false }: Props) => {
    return (
        <>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={clsx(errors[id] ? "placeholder-vin text-vin mb-0" : "mb-6",isLoading && "cursor-not-allowed" ,"h-8 rounded pl-2 ring-1 ring-gris outline-none focus:outline-none focus:ring-1 focus:ring-vin shadow-xs")}
                disabled={isLoading}
                autoComplete={isAutoCompleted ? "on" : "off"}
                {...register(id, { required: { value: required, message: errorMsg } })}
            />
            {errors[id] && (
                <p className="text-xs text-vin mb-2">{errors[id]?.message}</p>
            ) }
        </>
    );
};

export default Input;