import { Box, Typography } from '@mui/material';
import FingerIcon from '@/assets/img/Finger.png';
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      width={980}
      display={'flex'}
      justifyContent={'space-between'}
      mb={'54px'}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{ border: '1px solid white', padding: '7px' }}
      >
        <Typography lineHeight={'12px'} fontSize={12}>
          ПОКЕМОНЫ API
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} sx={{ gap: '10px' }}>
        <Image alt="click" src={FingerIcon} height={31} width={25} />
        <Typography width={108} fontSize={12} fontWeight={600}>
          Нажмите на нужное Покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
