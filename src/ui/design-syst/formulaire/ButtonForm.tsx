/** LIBRARY */
import clsx from "clsx";

interface Props {
    children: string,
    isLoading?: boolean,
    onClick?: () => void
}

const ButtonForm = ({children, isLoading, onClick}: Props) => {
    return (
        <button type="submit" onClick={onClick} className={clsx(isLoading && "cursor-not-allowed" ,"h-10 min-w-[120px] bg-vin text-fond font-bold text-lg rounded-lg shadow-sm px-3 py-1")} disabled={isLoading && true}>
            {isLoading ? (<div className="flex justify-center">
                <svg className="animate-spin" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" fill="text-fond"/><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"></path></svg>
            </div>) : (children)}
        </button>
    );
};

export default ButtonForm;