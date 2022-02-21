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
import getHistory from '../nomics/getHistory';

import NeuLine from '../components/chart';
import NeuButtonGroup from '../components/buttonGroup';


export default function Detail(props) {
  const [cryptoDetail, setCryptoDetail] = React.useState()
  const [cryptoHistory, setCryptoHistory] = React.useState()

  // This are for whatever is being clicked on the chart canvas
  const [barPrice, setBarPrice] = React.useState()
  const [barDate, setBarDate] = React.useState()

  const [timeButtonGroup, setTimeButtonGroup] = React.useState('2')

  React.useEffect(() => {
    // Crypto Info state | Loading state | Crypto ID | Fetch history? | Crypto History State
    getCrypto(setCryptoDetail, props.setLoading, params.coinId, true, setCryptoHistory); 
  },[])

  let params = useParams();

  let navigate = useNavigate();
  
  return (

    <Container maxWidth="md" sx={{ mt: 3, mb: 4, px:0 }}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'end',px:'40px', py:1, mb:1}}>
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
      {(props.loading === false && !cryptoDetail) && 
        <Typography variant="h1" sx={{ fontSize: '22px', textAlign: 'center', fontWeight: 300, my:"200px" }}>
          Fetch failed, try again later
        </Typography>
      }
      {(props.loading === false && cryptoDetail) && 
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '20px'}} >
            <Box
              component="img"
              sx={{
                height: '30px',
                width: 'auto',
                mr: '8px',
                
              }}
              alt="Crypto coin logo."
              src={cryptoDetail.logo_url}
            />
            <Typography variant="h1" sx={{ fontSize: '32px', textAlign: 'center', fontWeight: 600}}>
              {cryptoDetail.name}
            </Typography>
          </Box>
          
          <Typography variant="h4" color='text.secondary' sx={{ fontSize: '18px', textAlign: 'center', mb: .5, fontWeight: 500  }}>
            {barDate ? barDate : "Last price"}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end'}} >
            <Typography variant="h2" sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 500 }}>
              {barPrice ? ('$' + (barPrice)) : ('$' + parseFloat(cryptoDetail.price).toFixed(4))}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: '20px', textAlign: 'center', fontWeight: 500, ml:'8px', pb:'4px' }}>
              USD
            </Typography>
          </Box>
       
          <Typography 
            variant="h3" 
            color={(parseFloat(cryptoDetail['1d'].price_change_pct)) > 0 ? "percent.success" : "percent.warning"}  
            sx={{fontSize: '20px', textAlign: 'center', fontWeight: 500 ,mt: '5px', mb:'20px'}}
          >
            {(parseFloat(cryptoDetail['1d'].price_change_pct) * 100).toFixed(2) + '%'}
          </Typography> 
          
         
          {
            cryptoHistory ? 
            <>
              <NeuLine
                setBarPrice={setBarPrice}
                setBarDate={setBarDate}
                cryptoHistory={cryptoHistory}
                timeButtonGroup={timeButtonGroup}
              />
              <Box sx={{px:'30px'}} >
                <NeuButtonGroup
                  sx={{
                    mt:"25px",
                    
                  }}
                  timeButtonGroup={timeButtonGroup}
                  setTimeButtonGroup={setTimeButtonGroup}
                />
              </Box>
            </>
            
            :
            
            <Typography variant="h4" color='text.secondary' sx={{ fontSize: '18px', textAlign: 'center',my:'100px', fontWeight: 500  }}>
              No historic data to show
            </Typography>
          }
          
          
          
        </div>
      
      }
      <Box sx={{px:'30px'}} >
        <Typography  sx={{ fontSize: '20px', textAlign: 'center', mt: 3}}>
          By: <Link href="https://alwurts.com" color="text.primary" target="_blank">Alwurts</Link>
        </Typography>
        <Typography  sx={{ fontSize: '17px', textAlign: 'center', mt: 1}}>
          <Link href="https://nomics.com" color="text.primary" target="_blank">Crypto Market Cap & Pricing Data Provided By Nomics</Link>
        </Typography>
      </Box>
      
      
    </Container>

    
  );
}