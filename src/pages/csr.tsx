import React from "react";
import { useEffect } from "react";
import { pokemonService } from "../services/pokemon";
import { Pokemon } from "../services/pokemon/types";
import { PokemonListTemplate } from "../templates/PokemonListTemplate";

type Props = {
  pokemons: Pokemon[];
};

export default function Csr() {
  const [pokemons, setPokemons] = React.useState([]);

  async function fetchPokemons() {
    const pokemonsList = await pokemonService.get();
    setPokemons(pokemonsList);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonListTemplate pokemons={pokemons} title="Client Side Rendering" />
  );
}
