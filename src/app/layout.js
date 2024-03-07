import { Raleway } from 'next/font/google';
import './globals.css';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Header from '../components/Header';
import Chips from '../components/Chips';
import Theme from '@/components/Theme';

const raleway = Raleway({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata = {
  title: 'Pokemons',
  description: 'Here you can see Pokemons',
  author: 'Andrey Kuznetsov',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Theme>
          <Box
            width={1280}
            display="flex"
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Header />
            <Box
              width={980}
              display={'flex'}
              justifyContent={'space-between'}
              sx={{ gap: '12px' }}
            >
              <Chips />
              {children}
            </Box>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
