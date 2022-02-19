import React from 'react';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

import getCrypto from './nomics/getCrypto'

import Home from "./pages/Home"
import Detail from './pages/Detail';

import { red } from '@mui/material/colors';




function App() {
  
  const [darkState, setDarkState] = React.useState(false); // State for the dark mode
  
  const theme = createTheme({
  palette: {
    ...(darkState && {
      mode: 'dark',
      primary: {
        main: '#2b2b2b',
      },
      background: {
        default: '#2b2b2b',
      },
      neuShadow1: {
        primary: '#242424',
      },
      neuShadow2: {
        primary: '#323232',
      },
      
      text: {
        primary: '#fff',
      },
      percent: {
        success: '#32CC86',
        warning: '#FB3044',
    },
    }),
      
    ...(!darkState && {
      mode: 'light',
      primary: {
        main: '#e0e0e0',
      },
      background: {
        default: '#e0e0e0',
      },
      neuShadow1: {
        primary: '#c5c5c5',
      },
      neuShadow2: {
        primary: '#fbfbfb',
      },
      text: {
        primary: '#214166',
      },
      percent: {
        success: '#32CC86',
        warning: '#d6293a',
    },
    }),
      
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  
});

  return (
    <React.Fragment >
      <ThemeProvider theme={theme}>
        <CssBaseline />

          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home darkState={darkState} setDarkState={setDarkState} />} />
              <Route path=":coinId" element={<Detail darkState={darkState} setDarkState={setDarkState} />} />
              <Route
                  path="*"
                  element={<Navigate to="/" />}  //No match route
              />
              
            </Route>
          </Routes>

      </ThemeProvider>
      
    </React.Fragment>
  )
}

export default App;
