import OutlinedCard from "./QuizApp.jsx"

import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const { palette } = createTheme();

function MyApp() {
  const theme = createTheme({
    palette: {
      buttonColor: palette.augmentColor({
         color: {
          main: "#FFC1A8"
         }
       })
    }
  });

  return (

  <ThemeProvider theme={theme}>
    <OutlinedCard />
</ThemeProvider>
  );
}

export default MyApp;