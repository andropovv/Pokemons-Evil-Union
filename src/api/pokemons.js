import axios from "axios";

export async function getPokemons() {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    return data?.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonByName(name) {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
