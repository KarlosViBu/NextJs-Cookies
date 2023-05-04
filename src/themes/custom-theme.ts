import { createTheme } from '@mui/material';
import { green, grey, purple, red } from '@mui/material/colors';

// import { Kite_One, Kotta_One, Nova_Square } from 'next/font/google';
// export const kiteOne = Kite_One({
//     weight: ['400'],
//     subsets: ['latin'],
//     display: 'swap',
//     fallback: ['Helvetica', 'Arial', 'sans-serif'],
//   });


export const customTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
          default: grey[300]
      },
      primary: {
          main: red[900]
      },
      secondary: {
          main: green[500]
      },
      error: {
          main: red.A400
      },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    },
    typography: {
        // fontFamily: novaSq.style.fontFamily,
         // fontFamily: kiteOne.style.fontFamily,
         // fontFamily: kiteOne.style.fontFamily,
         // fontFamily: 'Farsan',
         fontFamily: 'Coda',
    }
});