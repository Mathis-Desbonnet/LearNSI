import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

{/* Création des différentes variables */}

let answer = [];
let answerRight = 0;
let question = 'Question'

{/* Création initial des boutons */}

let buttonData = [
  { label: 'Button 1', color: 'buttonColor', isCorrect: false, i: 0 },
  { label: 'Button 2', color: 'buttonColor', isCorrect: false, i: 1 },
  { label: 'Button 3', color: 'buttonColor', isCorrect: false, i: 2 },
  { label: 'Button 4', color: 'buttonColor', isCorrect: false, i: 3 },
];

{/* Fonction pour mélanger les boutons */}

function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}

shuffleArray(buttonData);

export default function QuizApp() {

  {/* Intialisation de différentes variables */}

  const [questionNumber, setQuestionNumber] = React.useState(0);

  let navigate = useNavigate();

  {/* Fonction lorsque l'utilisateur clique sur un bouton */}

  function valid(buttonClicked) {
    {/* Vérification du bouton */}
    for(let i=0; i<buttonData.length; i++) {
      if (buttonClicked === buttonData[i].label) {
        if (buttonData[i].isCorrect === true) {
          answerRight++;
          console.log("OUI")
        }
      }
    }
    
    answer.push(buttonClicked);
    
    setQuestionNumber(questionNumber + 1);
    shuffleArray(buttonData);
    if (questionNumber === 9) {
      {/* Losqu'il n'y a plus de questions */}
      UsePush();
      answerRight = 0
      navigate('/AddName')
    }
  }

  {/* Récupérations de certain éléments depuis notre bdd */}

  function UseFetch() {

    let [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5050/api/questions', 
      {method:"GET",})
          .then(response => response.json())
          .then((data) => {setData(data)});
    }, []);
  

    data.map(i => {
      {/* Affectation des nouvelles varaibles (nom des boutons, lequel est juste...) */}
      if (questionNumber<10) {
        buttonData = [
          { label: 'Button 1', color: 'buttonColor', isCorrect: false, i: 0 },
          { label: 'Button 2', color: 'buttonColor', isCorrect: false, i: 1 },
          { label: 'Button 3', color: 'buttonColor', isCorrect: false, i: 2 },
          { label: 'Button 4', color: 'buttonColor', isCorrect: false, i: 3 },
        ];
        buttonData[0].label = i.questions[questionNumber].options[0];
        buttonData[1].label = i.questions[questionNumber].options[1];
        buttonData[2].label = i.questions[questionNumber].options[2];
        buttonData[3].label = i.questions[questionNumber].options[3];
        
        let indexReponse = i.reponses[questionNumber];
        buttonData[indexReponse].isCorrect = true;

        question = i.questions[questionNumber].question

  }})
  shuffleArray(buttonData);
  }

  {/* Création du ligne "fantome"/"ephemere" */}

  function UsePush() {
    axios.post('http://localhost:5050/api/resultats', {
          username: "null",
          resultats: answer,
          essais: 0,
          points: answerRight,
  })
  }

  {/* Récupérations des informations des boutons, et mélange */}

  UseFetch();
  shuffleArray(buttonData);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.primary" display="flex" alignItems="center" justifyContent="center" gutterBottom>
            Quiz Chapitre POO
          </Typography>
          <Typography sx={{ fontSize: 30 }} color="text.primary" display="flex" alignItems="center" justifyContent="center" gutterBottom>
            {question}
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
