import { getPokemonByName } from "@/api/pokemons";
import PokemonCard from "@/components/PokemonCard";
import getPokemonInfo from "@/utils/getPokemonInfo";
import { Box, Typography } from "@mui/material";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Pokemon ${params.name}`,
  };
}

export default async function PokemonInfo({ params }) {
  const pokemonData = await getPokemonByName(params.name);
  const pokemonInfo = getPokemonInfo(pokemonData);

  return (
    <Box
      height={500}
      padding={"44px 44px 16px"}
      display={"flex"}
      width={484}
      gap={"44px"}
      flexDirection={"column"}
      backgroundColor={"black"}
    >
      {pokemonInfo ? (
        <PokemonCard pokemonInfo={pokemonInfo} />
      ) : (
        <>
          <Typography variant="h1" fontSize={"48px"} fontWeight={"700"}>
            Покемон не найден
          </Typography>
        </>
      )}
    </Box>
  );
}
