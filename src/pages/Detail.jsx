import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import DarkSwitch from '../components/darkSwitch';

import getCrypto from '../nomics/getCrypto';
import NeuIconButton from '../components/button';


export default function Detail(props) {
  const [cryptoDetail, setCryptoDetail] = React.useState([])

  
  React.useEffect(() => {
    getCrypto(setCryptoDetail ,params.coinId); 
  },[])

  let params = useParams();

  let navigate = useNavigate();

  return (

    <Container maxWidth="sm" sx={{ mt: 3, mb: 4 }}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'end',pl:3 , pr: 3, py:1, mb:3}}>
        <NeuIconButton sx={{ marginRight: 'auto'}} onClick={()=> navigate(`/`)}>
          <ArrowBackIosNewIcon />
        </NeuIconButton>
        <DarkSwitch sx={{marginRight: 10}} darkState={props.darkState} setDarkState={props.setDarkState}/>
      </Box>
      <Typography variant="h1" sx={{ fontSize: '42px', textAlign: 'center', fontWeight: 600  }}>
        {cryptoDetail.name}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: '35px', textAlign: 'center', mb: 3, fontWeight: 500  }}>
        {cryptoDetail.id}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: '22px', textAlign: 'center', mb: .5, fontWeight: 500  }}>
        Last price
      </Typography>
      <Typography variant="h1" sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 600 }}>
      {'$' + parseFloat(cryptoDetail.price).toFixed(4)}
      </Typography>
      <Typography variant="h3"   sx={{fontSize: '22px', textAlign: 'center', fontWeight: 500}}>
        {(parseFloat(cryptoDetail.price) * 100).toFixed(2) + '%'}
      </Typography> 
      
    </Container>

    
  );
}