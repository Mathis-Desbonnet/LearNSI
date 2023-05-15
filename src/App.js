import Home from './components/Home.jsx'
import MyApp from './components/App.jsx'
import LeaderBoard from './components/LeaderBoard.jsx';
import Docs from './components/Docs.jsx'
import AddName from './components/AddName.jsx'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Quiz from './components/App.jsx';

//Theme a applique sur tout le site (police d'ecriture)

const theme = createTheme({
  typography: {
    fontFamily: '"Playfair Display"',
  },
});

function App() {
  return (
<div className="App">
    <ThemeProvider theme={theme}> {/* Permet de mettre le thème sur les pages */}
      <Router>
        <Routes> {/* Fais les routages entre les pages */}
          <Route path="/" element={<Home />} />
          <Route path='/App' element={<MyApp />} />
          <Route path='/LeaderBoard' element={<LeaderBoard />} />
          <Route path='/Docs' element={<Docs />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/AddName' element={<AddName />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
    );
}

export default App;
