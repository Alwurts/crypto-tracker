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
 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function Detail(props) {
  const [cryptoDetail, setCryptoDetail] = React.useState([])
  const [cryptoHistory, setCryptoHistory] = React.useState([])
  
  React.useEffect(() => {
    getCrypto(params.coinId);
    getCryptoHistory(params.coinId);
    
  },[])

  let params = useParams();


  function getCrypto(id) {
    //console.log('Getting cryptos')
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

  function getCryptoHistory(id) {
    //console.log('Getting history')
    fetch("https://api.nomics.com/v1/exchange-rates/history?key=44cffefdce04124b246c324236bc07fb50b4a74d&start=2021-04-14T00%3A00%3A00Z&currency=" + id)
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

  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  return (

    <Container maxWidth="sm" sx={{ mt: 3, mb: 4 }}>

      <Typography variant="h1" sx={{ fontSize: '38px', textAlign: 'center', mb: 4 }}>
        {cryptoDetail.id}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: '38px', textAlign: 'center', mb: 4 }}>
      {'USD$' + parseFloat(cryptoDetail.price).toFixed(2)}
      </Typography>
      <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </Container>

    
  );
}