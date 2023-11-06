import { FallbackProps } from "react-error-boundary";


const ErrorBoundaryComponent: React.ComponentType<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div className="bg-error-boundary bg-cover bg-center relative flex flex-col justify-center items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-4xl text-white font-bold">Oups une erreur est survenue !</h1>
                <p className="text-white text-sm">Désolé, nous n'avons pas trouvé cette page.</p>
                <div>
                    <button className="bg-white text-black px-4 py-2" onClick={resetErrorBoundary}>Accueil Racks à pinard</button>
                </div>
            </div>
            <div className="absolute bottom-8">
                <p className="text-white ">Code d'erreur : ${error.message}</p>
            </div>
        </div>
    );
};

export default ErrorBoundaryComponent;