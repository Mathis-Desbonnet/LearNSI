import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const buttonData = [
  { label: 'Button 1', color: 'primary' },
  { label: 'Button 2', color: 'secondary' },
  { label: 'Button 3', color: 'error' },
  { label: 'Button 4', color: 'warning' },
];

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 30 }} color="text.primary" display="flex" alignItems="center" justifyContent="center" gutterBottom>
        Quiz Chapitre POO
      </Typography>
    </CardContent>
      <Grid container spacing={2}>
        {buttonData.map((button) => (
          <Grid item xs={6} key={button.label}>
            <Button variant="contained" color={button.color} fullWidth>
              {button.label}
            </Button>
            
          </Grid>
        ))}

          <Grid variant="contained" container item xs={3} style={{border:"10px solid #FFFFFF", justifyContent:"center", alignItems:"center", backgroundColor:"primary"}} color="primary" gutterBottom>
              <Typography  variant="caption" sx={{ fontSize: 20, backgroundColor:"primary" }} color="primary">
                Score : zgqg
              </Typography>
        </Grid>
      </Grid>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
