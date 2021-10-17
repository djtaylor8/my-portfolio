import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar'

function App() {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      })
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
