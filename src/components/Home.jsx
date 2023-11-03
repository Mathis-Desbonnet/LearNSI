import * as React from "react";
import Box from "@mui/material/Box";
import Image1 from "./img/Subtract1.png";
import Image2 from "./img/Group1.png";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar.jsx";
import Image from "mui-image";

{
  /* Création du thème */
}

const theme = createTheme({
  typography: {
    fontFamily: '"Playfair Display"',
  },
});

{
  /* Style pour le background image de notre menu */
}
/* The `styles` object is defining a CSS style for the background image of a container element. */
/* Yes*/
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
};

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Grid style={styles.paperContainer} container>
          <Grid
            item
            container
            xs={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "30vh",
            }}
          >
            <Typography variant="h3" style={{ color: "#383E56" }}>
              A new way to learn in fun !
            </Typography>
          </Grid>

          <Grid item xs={7} />
          <Grid item xs={6} />

          <Grid
            item
            xs={5}
            container
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: "40vh",
            }}
          >
            <Typography
              variant="h4"
              style={{ color: "#383E56", textAlign: "center" }}
            >
              Apprenez ou réviser la NSI grâce à des cours, des QCMs interactif
              et un classement compétitif !
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container>
          <Grid container item xs={6}>
            <Grid
              container
              item
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Typography
                variant="h4"
                style={{ color: "#383E56" }}
                gutterBottom
              >
                Un apprentissage plus rapide et efficace
              </Typography>
            </Grid>
            <Grid
              container
              item
              style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "#383E56",
                  textAlign: "center",
                  margin: "5px 15px 0 15px",
                }}
              >
                Les quizs présents sur le site permettent un apprentissage
                efficace, en plus d'un LeaderBoard qui permet de se concurrencer
                avec tous les autres étudiants !
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} gutterBottom>
            <div
              tag="circle1"
              style={{
                backgroundColor: "#F9B093",
                width: "300px",
                height: "300px",
                borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
                transform: "translate(100px, 30px)",
              }}
            ></div>
            <div
              tag="circle2"
              style={{
                backgroundColor: "#F0CEC8",
                width: "200px",
                height: "200px",
                borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
                transform: "translate(100px, 30px)",
              }}
            ></div>
            <div
              tag="circle3"
              style={{
                backgroundColor: "#FEF4EF",
                width: "150px",
                height: "150px",
                borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
                transform: "translate(-130px, 230px)",
              }}
              gutterBottom
            ></div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
