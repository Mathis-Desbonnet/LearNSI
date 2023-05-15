import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";

let x = 0

function LeaderBoard() {

    const [data, setData] = useState([]);

    {/* Récupérations des éléments de notre bdd */}

    function UseFetch() {

    
        useEffect(() => {
          fetch('http://localhost:5050/api/resultats_leaderboard', 
          {method:"GET",})
              .then((response) => response.json())
              .then((data) => {setData(data)});
        }, []);


      }
    
      UseFetch();
      
    {/* Classement des joueurs */}
    
    data.sort(function(a,b) {
        return b.points - a.points;
    });

    x = 1


    return(
        <Box>
            <Navbar />
            <Grid container marginTop={1}>
                <Grid container item xs={3} sx={{ border:"2px solid #FE743D", alignItems:"center", justifyContent:"center" }}>
                    <Typography variant='h4'>Classement</Typography>
                </Grid>
                <Grid container item xs={6} sx={{ border:"2px solid #FE743D", alignItems:"center", justifyContent:"center" }}>
                    <Typography variant='h4'>Pseudo</Typography>
                </Grid>
                <Grid container item xs={3} sx={{ border:"2px solid #FE743D", alignItems:"center", justifyContent:"center" }}>
                    <Typography variant='h4'>Score</Typography>
                </Grid>

                {
                
                
                data.map((i) => (
                <>
                    <Grid container item xs={3} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{x++}</Typography>
                    </Grid>
                    <Grid container item xs={6} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{i.username}</Typography>
                    </Grid>
                    <Grid container item xs={3} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{i.points}</Typography>
                    </Grid>
                </>
                ))
                }
                
            </Grid>
        </Box>
        
    );
}

export default LeaderBoard;