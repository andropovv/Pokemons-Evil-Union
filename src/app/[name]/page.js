import { getPokemonByName } from "@/api/pokemons";
import getPokemonInfo from "@/utils/getPokemonInfo";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
        <>
          <Typography variant="h1" fontSize={"48px"} fontWeight={"700"}>
            {pokemonInfo.name}
          </Typography>
          <Box
            height={200}
            width={396}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Box sx={{ position: "absolute", top: "-50px" }}>
              <Image
                position={"absolute"}
                alt="sprite"
                src={pokemonInfo.sprite}
                width={300}
                height={300}
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={"500"} fontSize={"17px"}>
              Снялся в {} сериях
            </Typography>
            <Typography fontWeight={"500"} fontSize={"17px"}>
              id: {pokemonInfo.id}
            </Typography>
            <Typography fontWeight={"500"} fontSize={"17px"}>
              height: {pokemonInfo.height}
            </Typography>
            <Typography fontWeight={"500"} fontSize={"17px"}>
              attack: {pokemonInfo.attack}
            </Typography>
          </Box>
        </>
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
