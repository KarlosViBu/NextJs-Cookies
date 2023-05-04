import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '@/themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}

// aqui debemos leer la cookie y definir el theme

function MyApp({ Component, pageProps, theme = 'dark' }: Props ) {

  // console.log({theme})

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
        ? lightTheme
        : (cookieTheme === 'dark')
          ? darkTheme
          : customTheme;
    
    setCurrentTheme( selectedTheme );
  }, [])

  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
