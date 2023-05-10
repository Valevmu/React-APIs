import React, { useState } from "react";
import axios from "axios";

function Pokemones() {
  const [pokemon, setPokemon] = useState([]);
  const hanledButton = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.results);
      });
  };
  return (
    <div className="container">
      <button className="button" onClick={hanledButton}>
        FETCH POKEMON
      </button>
      {pokemon.map((pokemon, i) => {
        return (
          <li className="listaPoke" key={i}>
            <ul>Nombre: {pokemon.name}</ul>
          </li>
        );
      })}
    </div>
  );
}
export default Pokemones;
// const hanledButon = async () => {
//   try {
//     const response = await fetch(
//       "https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0"
//     );
//     const coderDate = await response.json();

//     let pokes = [];
//     pokes = coderDate.results.map((pokemon) => {
//       return pokemon.name;
//     });

//     setPokemones(pokes);
//   } catch (error) {
//     console.log(error);
//   }
// };
