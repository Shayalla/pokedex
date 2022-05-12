import React from "react";
import { useAuth } from "../context/provider";
import Switch from "./Switch";
import TypeSwitch from "./TypeSwitch";
import { typesArray } from "./typesArray";

function FilterPanel() {
  const {
    genValue,
    setGenValue,
    pokeData,
    setPokeList,
    pokeType,
    setPokeType,
    pokeList,
  } = useAuth();

  const names = {
    dois: "Generation 1",
    tres: "Generation 2",
    quatro: "Generation 3",
  };

  const typesOff = {
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
  };

  const filtro1 = () => {
    setPokeType(typesOff);
    setGenValue({ g1: true, g2: false, g3: false });
    const pokemons = [...pokeData];
    setPokeList(pokemons.filter((e, i) => i < 151));
  };

  const filtro2 = () => {
    setPokeType(typesOff);
    setGenValue({ g1: false, g2: true, g3: false });
    const pokemons = [...pokeData];
    setPokeList(pokemons.filter((e, i) => i > 150 && i < 251));
  };

  const filtro3 = () => {
    setPokeType(typesOff);
    setGenValue({ g1: false, g2: false, g3: true });
    const pokemons = [...pokeData];
    setPokeList(pokemons.filter((e, i) => i > 250));
  };

  const filtroType = (e) => {
    const { name } = e.target;

    if (pokeType[name] === false) {
      if (genValue.g1 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        setPokeList(
          [...pokeData.filter((e, i) => i < 151)].filter(
            (e) => e.types.some((ee) => ee.type.name === name) === true
          )
        );
      }
      if (genValue.g2 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        return setPokeList(
          [...pokeData.filter((e, i) => i > 150 && i < 251)].filter(
            (e) => e.types.some((ee) => ee.type.name === name) === true
          )
        );
      }
      if (genValue.g3 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        return setPokeList(
          [...pokeData.filter((e, i) => i > 250)].filter(
            (e) => e.types.some((ee) => ee.type.name === name) === true
          )
        );
      }
    }

    if (pokeType[name] === true) {
      if (genValue.g1 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        return setPokeList([...pokeData.filter((e, i) => i < 151)]);
      }
      if (genValue.g2 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        return setPokeList([...pokeData.filter((e, i) => i > 150 && i < 251)]);
      }
      if (genValue.g3 === true) {
        setPokeType({ ...typesOff, [name]: !pokeType[name] });
        return setPokeList([...pokeData.filter((e, i) => i > 250)]);
      }
    }
  };

  return (
    <div className="filterPanel">
      <div>
        <img
          className="pikachuPanel"
          alt="runningPikachu"
          src="https://www.pikpng.com/pngl/b/148-1480861_the-pokedex-is-a-digital-encyclopedia-created-by.png"
        />
      </div>
      <div className="painelFiltros">
        <div className="botoesPanel">
          <Switch
            isOn={genValue.g1}
            handleToggle={() => filtro1()}
            id={2}
            name={names.dois}
          />
          <Switch
            isOn={genValue.g2}
            handleToggle={() => filtro2()}
            id={3}
            name={names.tres}
          />
          <Switch
            isOn={genValue.g3}
            handleToggle={() => filtro3()}
            id={4}
            name={names.quatro}
          />
        </div>

        <div className="elementalPanel">
          {typesArray.map((element, index) => (
            <TypeSwitch
              isOn={pokeType[element.name]}
              handleToggle={filtroType}
              id={index}
              name={element.name}
              img={element.img}
              className="row"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
