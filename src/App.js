import Navbar from './components/navbar'
import "./App.css"
import Pokecard from './components/pokecard'
import Pokedex from './views/Pokedex';

function App() {
  return (
    <>
      <Navbar />
      {/* <Pokecard /> */}
      <Pokedex />
    </>
   
  );
}

export default App;
