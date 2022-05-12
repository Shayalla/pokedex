import axios from "axios";
import { useEffect } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import { useAuth } from "./context/provider";
import "./App.css";
import PokeDex from "./components/PokeDex";

function App() {
  const { setPokeData, loading, setLoading, setPokeList } = useAuth();

  const getAllPokes = async () => {
    try {
      let pokeArray = [];
      for (let i = 1; i < 386; i++) {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokeArray.push(pokemon.data);
      }
      setPokeData(pokeArray);
      setPokeList([...pokeArray].filter((e, i) => i < 151));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    <div className="App">
      <Header />
      <FilterPanel />
      <div className="mainBody">
        {loading 
          ? <Loading />
          : <PokeDex />}
      </div>
    </div>
  );
}

export default App;
