import React from 'react';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

import Home from "./pages/Home"
import Detail from './pages/Detail';


function App() {
  
  const [darkState, setDarkState] = React.useState(true); // State for the dark mode
  const [loading, setLoading] = React.useState(false); // State for the dark mode
  
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
        secondary: '#bbb',
      },
      percent: {
        success: '#32CC86',
        warning: '#FB3044',
      },
      loading: {
        primary: '#122069',
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
        secondary:'#111',
      },
      percent: {
        success: '#32CC86',
        warning: '#d6293a',
      },
      loading: {
        primary: '#d6b027',
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
              <Route index element={<Home darkState={darkState} setDarkState={setDarkState} loading={loading} setLoading={setLoading} />} />
              <Route path=":coinId" element={<Detail darkState={darkState} setDarkState={setDarkState} loading={loading} setLoading={setLoading} />} />
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
