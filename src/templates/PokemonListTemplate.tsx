import { PokemonCard } from "../components/PokemonCard";
import { Pokemon } from "../services/pokemon/types";
import * as S from "./styles";
type Props = {
  pokemons: Pokemon[];
  title: string;
};

export function PokemonListTemplate({ pokemons, title }: Props) {
  return (
    <>
      <h1>{title}</h1>

      <S.Section>
        {pokemons.map(({ id, name, type }, index) => (
          <PokemonCard key={`${id}-${index}`} id={id} name={name} type={type} />
        ))}
      </S.Section>
    </>
  );
}
