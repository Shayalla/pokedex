import React, { useState } from "react";

export const mainContext = React.createContext({});

export const AuthProvider = (props) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState();
  const [genValue, setGenValue] = useState({
    g1: true,
    g2: false,
    g3: false,
  });
  const [pokeType, setPokeType] = useState({
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fairy: false,
    fighting: false,
    fire: false,
    flying: false,
    ghost: false,
    grass: false,
    ground: false,
    ice: false,
    normal: false,
    poison: false,
    psychic: false,
    rock: false,
    steel: false,
    water: false,
  });

  return (
    <mainContext.Provider
      value={{
        pokeData,
        setPokeData,
        loading,
        setLoading,
        pokeList,
        setPokeList,
        genValue,
        setGenValue,
        pokeType,
        setPokeType,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export const useAuth = () => React.useContext(mainContext);
