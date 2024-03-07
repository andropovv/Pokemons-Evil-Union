export default function getPokemonInfo(data) {
  if (!data) return;
  let name = data.name.split("");
  name[0] = name[0].toUpperCase();
  name = name.join("");

  return {
    name: name,
    series: 79,
    id: data.id,
    attack: data.stats[1].base_stat,
    height: data.height,
    sprite: data.sprites.front_shiny,
  };
}
