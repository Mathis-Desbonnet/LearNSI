import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

{/* Création des différentes variables */}

let point = 0;
let resultat = [];

function AddName() {

    {/* Utilisation du navigage entre les pages */}

    let navigate = useNavigate();

    {/* Stockage de la variable de username */}

    const [username, setUsername] = useState("");
    const handleChange = e => {
        setUsername(e.target.value);
    }

    {/* Récupère les données de la bdd */}

    function UseFetch() {
        point = 0;

        let [data, setData] = useState([]);
    
        useEffect(() => {
          fetch('http://localhost:5050/api/resultats', 
          {method:"GET",})
              .then(response => response.json())
              .then((data) => {setData(data)});
        }, []);
      
        {/* Map pour récuperer et stocker les données */}

        data.map(i => {
            point = i.points;
            resultat = i.resultats;
          })
    
      }


    {/* Fonction pour ajouter des lignes dans notres bdd (si le joueur accepte) */}
    
    function UsePush() {
        axios.post('http://localhost:5050/api/resultats_leaderboard', {
              username: username,
              resultats: resultat,
              essais: 0,
              points: point,
      })
      navigate('/');
      }

    {/* Récupération intial pour mettre le score */}
    
    UseFetch()
    

    return(
        <Box>
            <Navbar />
            <Grid container sx={{justifyContent: "center", alignItems: "center"}}>
            <Card sx={{ minWidth: 275,justifyContent: "center", alignItems: "center", maxWidth: 345, marginTop: "20px" }} gutterBottom>
            <CardContent>
                <Typography variant="h5" component="div" align="center">
                Vous avez eu :
                </Typography>
                <Typography variant="h3" align="center">
                    {point} / 10
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            <Typography>Entrez votre pseudo :</Typography> <TextField id="outlined-basic" label="Pseudo" variant="outlined" onChange={handleChange} />
            <Button variant="contained" color="success" onClick={() => {UsePush()}}>Envoyer votre score</Button> {/* Bouton Accepter */} 
            <Button variant="contained" color="error" onClick={() => {UsePush()}}>Retourner à l'accueil</Button> {/* Bouton refuser */}
        </Box>
        
    );
}

export default AddName;