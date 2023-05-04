import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import Cookies from 'js-cookie';
// import axios from 'axios';


import { Layout } from '../components/layouts';


interface Props {
    theme: string;
}

// const ThemeChangerPage = () => {
    // Para desextructurar el theme de las props
const ThemeChangerPage: FC<Props> = ({ theme }) => {

    const [currentTheme, setCurrentTheme] = useState(theme);

    // cambiar el tema segun se elija en option-group
    const onThemeChange = ( event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;
        setCurrentTheme( selectedTheme );

        console.log({ theme })

        // lo grabo en local storage
        localStorage.setItem('theme', selectedTheme );
        Cookies.set('theme', selectedTheme );
    }
/*
        
        // console.log({ props })

    


    }

    const onClick = async() => {
        const { data } = await axios.get('/api/hello');

        console.log({ data });
    }
*/
    useEffect(() => {
        //  LOCAL STORAGE
        // La info queda en el frontend  a menos que por peticion "axios" se envie peticion 
        // lo recupero de localStorage   5 Megas de almacenamiento  (info pokemon < 0.5 Megas)
        console.log( 'LocalStorage:', localStorage.getItem('theme') );

        // LAS COOKIES
        // La info viaja hacia el servidor cuando se hace una request
        console.log( 'Cookies:', Cookies.get('theme') );
    
        // axios.post('/api/hello', { localStorage.getItem('them')});
    }, [])
   

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light' control={ <Radio /> } label="Light" />
                            <FormControlLabel value='dark' control={ <Radio /> } label="Dark" />
                            <FormControlLabel value='custom' control={ <Radio /> } label="Custom" />
                        </RadioGroup>
                    </FormControl>

                    {/* <Button 
                        // onClick={ onClick }
                    >
                        Solicitud
                    </Button> */}
                </CardContent>
            </Card>
        </Layout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// transforma la pagina de estatica  a  ser generada por el servidor.
// es mas lento que un contenido generado de manera estatica
                            // desextructuro elcontex y saco de ahi la request (solicitud del cliente)
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
    // const cookies = req.cookies;
    
    // cookies desextructuradas
    const { theme = 'light', name = 'No name' } = req.cookies;
    // console.log({ theme, name });
    const validThemes = ['light','dark','custom'];


    return {
        props: {
            theme: validThemes.includes( theme ) ? theme : 'dark',
            name,
        }
    }
}

export default ThemeChangerPage;