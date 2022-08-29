import { pokemonService } from "../services/pokemon";
import { Pokemon } from "../services/pokemon/types";
import { PokemonListTemplate } from "../templates/PokemonListTemplate";

type Props = {
  pokemons: Pokemon[];
};

export default function Ssg({ pokemons }: Props) {
  return (
    <PokemonListTemplate pokemons={pokemons} title="Static Site Generation" />
  );
}

export async function getStaticProps() {
  const pokemons = await pokemonService.get();
  return {
    props: { pokemons },
    revalidate: 30,
  };
}
