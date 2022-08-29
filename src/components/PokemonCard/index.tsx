import { Pokemon } from "../../services/pokemon/types";
import * as S from "./styles";

export function PokemonCard({ id, name, type, ...rest }: Pokemon) {
  return (
    <S.Wrapper {...rest} style={{ background: "#f2f43", padding: "1rem" }}>
      <strong>{name}</strong>
      <p>{id}</p>
      <p>{type}</p>
    </S.Wrapper>
  );
}
