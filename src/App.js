import React from 'react';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

import Home from "./pages/Home"
import Detail from './pages/Detail';

import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    mode: 'dark',
  },
});

function App() {
  const [cryptos, setCryptos] = React.useState([])


  function getCryptos() {
    console.log('Getting cryptos')
    fetch("https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&per-page=10&page=1")
    .then(response => response.json())
    .then((data) => {
      setCryptos(data)
      console.log(data)
    })
    .catch((error) => {
      setCryptos([]);
      console.log("Couldnt fetch data")
    })
    
  }

  function getCryptoHistory() {
    console.log('Getting history')
    fetch("https://api.nomics.com/v1/exchange-rates/history?key=44cffefdce04124b246c324236bc07fb50b4a74d&currency=AVAX&start=2021-04-14T00%3A00%3A00Z")
    .then(response => response.json())
    .then((data) => {
      
      console.log(data)
    })
    
  }

  return (
    <React.Fragment >
      <ThemeProvider theme={theme}>
        <CssBaseline />

          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home cryptos={cryptos} getCryptos={getCryptos} />} />
              <Route path=":coinId" element={<Detail />} />
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
