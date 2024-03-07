import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PokemonCard = ({ pokemonInfo }) => {
  return (
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
          Снялся в {pokemonInfo.series} сериях
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
  );
};

export default PokemonCard;
