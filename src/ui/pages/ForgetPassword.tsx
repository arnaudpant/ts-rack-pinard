import BoxForget from "../modules/authentification/forget/BoxForget";


const ForgetPassword = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center text-xl py-4 px-1">Mot de passe perdu</h2>
            <div>
                <img src="/wine-bottle.svg" alt="bouteille de vin" className="h-20 w-20" />
            </div>
            <BoxForget />
        </div>
    );
};

export default ForgetPassword;