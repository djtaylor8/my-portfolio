import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';

function App() {

const [darkMode, setDarkMode] = useState(false);


  const theme = createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Welcome />
      <About />
    </ThemeProvider>
  );
}

export default App;




