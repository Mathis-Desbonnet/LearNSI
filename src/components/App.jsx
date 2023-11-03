import QuizApp from "./QuizApp.jsx"
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./Navbar.jsx";

{/* Mise en forme de la page du Quiz */}

const { palette } = createTheme();

function Quiz() {

  {/* Mise en place du thème pour la couleur des boutons et la police d'ecriture */}

  const theme = createTheme({
    palette: {
      buttonColor: palette.augmentColor({
         color: {
          main: "#FFC1A8"
         }
       })
    },
    typography: {
      fontFamily: '"Playfair Display"',
    },
  });

  return (

  <ThemeProvider theme={theme}>
    <Navbar /> {/* Ajoute la NavBar */}
    <QuizApp /> {/* Ajoute le Quiz */}
</ThemeProvider>
  );
}

export default Quiz;