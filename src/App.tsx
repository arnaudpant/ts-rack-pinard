import Header from "./layouts/Header";
import BoxForget from "./ui/modules/authentification/forget/BoxForget";
import BoxConnexion from "./ui/modules/authentification/login/BoxConnexion";
import BoxInscription from "./ui/modules/authentification/registrer/BoxInscription";



function App() {


  return (
    <div className="bg-fond min-h-screen">
      <Header />
      <h2 className="text-center italic py-4 px-1">Visualisez et gèrez vos casiers à bouteilles !</h2>
      <div className="text-center text-3xl">🍾 🍷</div>
      <div className="h-80 md:h-96 w-full flex justify-center">
        <img src="/vine.svg" alt="" className="h-80 w-80 md:h-full" />
      </div>
      <BoxConnexion />
      <BoxInscription />
      <BoxForget />
    </div>

  )
}

export default App
