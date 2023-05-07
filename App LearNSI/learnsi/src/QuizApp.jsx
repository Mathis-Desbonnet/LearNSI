import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {buttonData.map((button) => (
          <Grid item xs={6} md={3} key={button.label}>
            <Button variant="contained" color={button.color} fullWidth>
              {button.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    <CardContent>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 1, width:"20%", borderRadius: 1 }}>
        <Typography sx={{ fontSize: 15 }} gutterBottom>
          Score :
        </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
