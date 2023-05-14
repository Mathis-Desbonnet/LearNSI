import QuizApp from "./QuizApp.jsx"

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./Navbar.jsx";

const { palette } = createTheme();

function Quiz() {
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
    <Navbar />
    <QuizApp />
</ThemeProvider>
  );
}

export default Quiz;