import { api } from "../../api";

export const pokemonService = {
  async get() {
    const response = await api.get("/pokemons");

    return response.data;
  },
};
