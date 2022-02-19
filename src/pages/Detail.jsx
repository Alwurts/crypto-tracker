import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import DarkSwitch from '../components/darkSwitch';

import getCrypto from '../nomics/getCrypto';
import NeuIconButton from '../components/button';
import NeuLoading from '../components/loading';

export default function Detail(props) {
  const [cryptoDetail, setCryptoDetail] = React.useState([])

  
  React.useEffect(() => {
    getCrypto(setCryptoDetail, props.setLoading, params.coinId); 
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

      {props.loading && 
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'end',pl:3 , pr: 3, py:1, mb:4}}>
          <Typography variant="h1" sx={{ fontSize: '22px', textAlign: 'center', fontWeight: 300, mb:5, mt:2 }}>
            Loading latest crypto values
          </Typography>
          <NeuLoading sx={{mb:3}} size="70px" />
        </Box>
      }
      {props.loading === false && 
        <div>
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
          {
            cryptoDetail['1d'] && 
            <Typography variant="h3" color={(parseFloat(cryptoDetail['1d'].price_change_pct)) > 0 ? "percent.success" : "percent.warning"}  sx={{fontSize: '22px', textAlign: 'center', fontWeight: 500}}>
              {(parseFloat(cryptoDetail['1d'].price_change_pct) * 100).toFixed(2) + '%'}
            </Typography> 
          }
          
        </div>
      
      }
      <Typography  sx={{ fontSize: '20px', textAlign: 'center', mt: 3}}>
        By: <Link href="https://alwurts.com" color="text.primary" target="_blank">Alwurts</Link>
      </Typography>
      <Typography  sx={{ fontSize: '17px', textAlign: 'center', mt: 1}}>
        <Link href="https://nomics.com" color="text.primary" target="_blank">Crypto Market Cap & Pricing Data Provided By Nomics</Link>
      </Typography>
      
    </Container>

    
  );
}