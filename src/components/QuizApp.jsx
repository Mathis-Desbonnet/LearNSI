import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

let buttonData = [
  { label: 'Button 1', color: 'buttonColor', isCorrect: true },
  { label: 'Button 2', color: 'buttonColor', isCorrect: false },
  { label: 'Button 3', color: 'buttonColor', isCorrect: false },
  { label: 'Button 4', color: 'buttonColor', isCorrect: false },
];

function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}

shuffleArray(buttonData);

export default function QuizApp() {
  const [questionNumber, setQuestionNumber] = React.useState(0);

  function valid(buttonClicked) {
    for (let i=0; i<buttonData.length; i++) {
      if (buttonData[i]['label'] === buttonClicked) {
        if (buttonData[i]['isCorrect'] === true) {
          alert("Correcte !")
        }
      }
    }
    setQuestionNumber(questionNumber + 1);
    shuffleArray(buttonData);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.primary" display="flex" alignItems="center" justifyContent="center" gutterBottom>
            Quiz Chapitre POO
          </Typography>
        </CardContent>
        <Grid container spacing={2}>
          {buttonData.map((button) => (
            <Grid item xs={6} key={button.label}>
              <Button variant="contained" color={button.color} onClick={() => { valid(button.label);}} fullWidth>
                {button.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <CardContent>
          <Box sx={{ backgroundColor: 'primary.main', color: 'buttonColor', p: 1, width:"20%", borderRadius: 1 }}>
            <Typography sx={{ fontSize: 15 }} gutterBottom>
              Question n°{questionNumber}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
