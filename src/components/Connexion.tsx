

const Connexion: React.FC = () => {
    return (
        <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-md">
            <h2 className="text-center text-2xl">Connexion</h2>
            <form className="flex flex-col">
                    <label htmlFor="loginUser" className='pb-1' >Login</label>
                    <input
                        type="text"
                        id="loginUser"
                        required
                        placeholder="Entrez votre login"
                        className="mb-6 h-8 rounded pl-2"
                    />

                    <label htmlFor="password" className='pb-1' >Code a 3 chiffres</label>
                    <input
                        type="number"
                        id="password"
                        data-testid="password"                  
                        placeholder="***"
                        className="mb-6 h-8 rounded pl-2"
                    />

                    <button type="submit" className="h-10 bg-vin text-fond font-bold text-lg rounded-lg shadow-sm">VALIDER</button>
                    
                </form>
        </div>
    );
};

export default Connexion;