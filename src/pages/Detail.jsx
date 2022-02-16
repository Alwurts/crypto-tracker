import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
 
import { useParams } from "react-router-dom";
 


export default function Detail(props) {
  const [cryptoDetail, setCryptoDetail] = React.useState([])
  const [cryptoHistory, setCryptoHistory] = React.useState([])
  
  React.useEffect(() => {
    getCrypto(params.coinId);
   
    
  },[])

  let params = useParams();


  function getCrypto(id) {
    console.log('Getting cryptos')
    fetch("https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&ids=" + id)
    .then(response => response.json())
    .then((data) => {
      setCryptoDetail(data[0])
      console.log(data)
    })
    .catch((error) => {
      setCryptoDetail([]);
      console.log("Couldnt fetch data")
    })
    
  }

  function getCryptoHistory() {
    console.log('Getting history')
    fetch("https://api.nomics.com/v1/exchange-rates/history?key=44cffefdce04124b246c324236bc07fb50b4a74d&currency=AVAX&start=2021-04-14T00%3A00%3A00Z")
    .then(response => response.json())
    .then((data) => {
      setCryptoHistory(data);
      console.log(data)
    })
    .catch((error) => {
      setCryptoHistory([]);
      console.log("Couldnt fetch data")
    })
    
  }



  return (

    <Container maxWidth="sm" sx={{ mt: 3, mb: 4 }}>

      <Typography variant="h1" sx={{ fontSize: '38px', textAlign: 'center', mb: 4 }}>
        {cryptoDetail.id}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: '38px', textAlign: 'center', mb: 4 }}>
      {'USD$' + parseFloat(cryptoDetail.price).toFixed(2)}
      </Typography>
    </Container>

    
  );
}