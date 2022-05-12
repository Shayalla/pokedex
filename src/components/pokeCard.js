import React from "react";
import typeImageGenerator from "./typeImageGenerator";

function pokeCard(name, image, types, id) {
  return (
    <div key={id} className="pokeCard">
      <p className="pokeName">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <img className="pokeImage" alt="pokemonimage" src={image} />
      <div className="pokeTipos">
        {types.map((t, index) => (
          <div key={index} className={t.type.name}>
            <img
              className="typeImage"
              alt="pokeimage"
              src={typeImageGenerator(t.type.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default pokeCard;
