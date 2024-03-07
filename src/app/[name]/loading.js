import { Skeleton } from '@mui/material';

export default function PokemonLoader() {
  return (
    <Skeleton
      animation="pulse"
      variant="rectangular"
      width={484}
      height={500}
      sx={{ bgcolor: 'black' }}
    ></Skeleton>
  );
}
