import Header from "./layouts/Header";
import BoxConnexion from "./ui/components/formulaire/BoxConnexion";



function App() {


  return (
    <div className="bg-fond min-h-screen">
      <Header />
      <h2 className="text-center italic py-4 px-1">Visualisez et gèrez vos casiers à bouteilles !</h2>
      <div className="text-center text-3xl">🍾 🍷</div>
      <BoxConnexion />
    </div>

  )
}

export default App
