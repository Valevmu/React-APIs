import React, { useState, useEffect } from "react";
import Home from "./Home";

export const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const hanledButon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0"
      );
      const coderDate = await response.json();

      let pokes = [];
      pokes = coderDate.results.map((pokemon) => {
        return pokemon.name;
      });

      setPokemones(pokes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="button"onClick={hanledButon}>FETCH POKEMON</button>
      {pokemones.map((pokemones, i) => (
        <Home key={i} nombres={pokemones} />
      ))}
    </div>
  );
};
