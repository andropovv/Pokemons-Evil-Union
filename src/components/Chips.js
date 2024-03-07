import { getPokemons } from '@/api/pokemons';
import { Box, Chip } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export const Chips = async () => {
  const pokemonsList = await getPokemons();

  return (
    <Box width={484} height={500} display={'flex'} alignItems={'center'}>
      <Box display={'flex'} columnGap={'6px'} rowGap={'10px'} flexWrap={'wrap'}>
        {pokemonsList.map((p) => (
          <Link href={`/${p.name}`} key={p.name}>
            <Chip
              label={p.name}
              color="primary"
              sx={{
                padding: '20px',
                height: '60px',
                borderRadius: '44px',
                fontSize: '20px',
                lineHeight: '20px',
              }}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const DynamicChips = dynamic(() => import('./Chips').then((mod) => mod.Chips), {
  loading: () => <Box>Skeleton</Box>,
});

export default DynamicChips;
