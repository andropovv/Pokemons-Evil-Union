import { getPokemons } from "@/api/pokemons";
import { Box, Chip, Typography } from "@mui/material";
import Link from "next/link";

const Chips = async () => {
  const pokemonsList = await getPokemons();

  return (
    <Box width={484} height={500} display={"flex"} alignItems={"center"}>
      <Box display={"flex"} columnGap={"6px"} rowGap={"10px"} flexWrap={"wrap"}>
        {pokemonsList?.length ? (
          pokemonsList.map((p) => (
            <Link href={`/${p.name}`} key={p.name}>
              <Chip
                label={p.name}
                color="primary"
                sx={{
                  padding: "20px",
                  height: "60px",
                  borderRadius: "44px",
                  fontSize: "20px",
                  lineHeight: "20px",
                }}
              />
            </Link>
          ))
        ) : (
          <Typography fontSize={"20px"} fontWeight={500}>
            Покемоны не были получены
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Chips;
