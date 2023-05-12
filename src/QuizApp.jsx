import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const buttonData = [
  { label: 'Button 1', color: 'buttonColor' },
  { label: 'Button 2', color: 'buttonColor' },
  { label: 'Button 3', color: 'buttonColor' },
  { label: 'Button 4', color: 'buttonColor' },
];

export default function OutlinedCard() {
  const [questionNumber, setQuestionNumber] = React.useState(0);

  function count() {
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.primary" display="flex" alignItems="center" justifyContent="center" gutterBottom>
            Quiz Chapitre POO
          </Typography>
        </CardContent>
        <Grid container spacing={2}>
          {buttonData.map((button) => (
            <Grid item xs={6} key={button.label}>
              <Button variant="contained" color={button.color} onClick={count} fullWidth>
                {button.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <CardContent>
          <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 1, width:"20%", borderRadius: 1 }}>
            <Typography sx={{ fontSize: 15 }} gutterBottom>
              Question n°{questionNumber}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
