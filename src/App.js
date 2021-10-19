import React, { useState } from 'react';
import { useDarkMode } from './useDarkMode';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import ProjectIndex from './components/projects/ProjectIndex';
import ProjectShow from './components/projects/ProjectShow';
import Footer from './components/Footer';


function App() {

const [darkMode, toggleDarkMode, componentMounted] = useDarkMode();

const theme = createTheme({
  palette: {
    mode: darkMode,
  }
})

if (!componentMounted) {
  return <div />
}

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;


