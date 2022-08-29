import { pokemonService } from "../services/pokemon";
import { Pokemon } from "../services/pokemon/types";
import { PokemonListTemplate } from "../templates/PokemonListTemplate";

type Props = {
  pokemons: Pokemon[];
};

export default function Ssr({ pokemons }: Props) {
  return (
    <PokemonListTemplate pokemons={pokemons} title="Server Side Rendering" />
  );
}

export async function getServerSideProps() {
  const pokemons = await pokemonService.get();
  return {
    props: { pokemons },
  };
}
