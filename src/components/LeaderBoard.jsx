import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const tab = [ {score: 20, pseudo: "Jacques", pos:1},
            {score: 11, pseudo: "Michel", pos:1},
            {score: 17, pseudo: "Robert", pos:1},
            {score: 17, pseudo: "Mathis", pos:1},
            {score: 15, pseudo: "Merlin", pos:1},
            {score: 19, pseudo: "Toto", pos:1} ]

tab.sort(function(a,b) {
    return b.score - a.score;
});

for (let i=0; i<tab.length; i++) {
    tab[i]['pos'] = i+1;
}

function LeaderBoard() {
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

                {tab.map((tab) => (
                <>
                    <Grid container item xs={3} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{tab.pos}</Typography>
                    </Grid>
                    <Grid container item xs={6} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{tab.pseudo}</Typography>
                    </Grid>
                    <Grid container item xs={3} sx={{ border: "2px solid #FE743D", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h5'>{tab.score}</Typography>
                    </Grid>
                </>
                ))}
            </Grid>
        </Box>
        
    );
}

export default LeaderBoard;