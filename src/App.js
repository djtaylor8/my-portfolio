import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import ProjectIndex from './components/projects/ProjectIndex';
import ProjectShow from './components/projects/ProjectShow';


function App() {

const [darkMode, setDarkMode] = useState(false);


  const theme = createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>

          <Route exact path='/'>
            <Welcome />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/projects/:projectId'>
            <ProjectShow />
          </Route>

          <Route exact path='/projects'>
            <ProjectIndex />
          </Route>

        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;