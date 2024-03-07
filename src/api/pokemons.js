import axios from 'axios';

export async function getPokemons() {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );
  return data.results;
}

export async function getPokemonByName(name) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return data;
}
