import * as React from 'react';
//import Switch from '@mui/material/Switch';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
 
import { useNavigate } from "react-router-dom";
import DarkSwitch from '../components/darkSwitch';
import NeuCard from '../components/card';
 
import getCrypto from '../nomics/getCrypto';

export default function Home(props) {
 
  
  const [cryptos, setCryptos] = React.useState([])
  
  React.useEffect(() => {
    //props.getCryptos();
    getCrypto(setCryptos); // Pass in the state to update
  },[])
  
  const handleChange = (event) => {
    props.setDarkState(event.target.checked);
  };

  let navigate = useNavigate();

  const navigateToDetail = (id, index) => {
    navigate(`/${id}`);

  }

  return (

    <Container maxWidth="sm" sx={{ mt: 3, mb: 4}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'end',pl:2 , pr: 3, py:1.5, mb:4}}>
        <Typography variant="h1" sx={{ fontSize: '32px', marginRight: 'auto', fontWeight: 600 }}>
          Crypto Track
        </Typography>
        <DarkSwitch sx={{marginRight: 10}} darkState={props.darkState} setDarkState={props.setDarkState}/>
      </Box>
      
      { 
        cryptos.map((crypto, index) => (
        <NeuCard 
          sx={{ 
            my:4,
        }} 
          key={crypto.id}>
          <CardActionArea sx={{display: 'flex', justifyContent: 'start'}} onClick={event => { navigateToDetail(crypto.id, index) }}>
            <CardMedia
              component="img"
              image={crypto.logo_url}
              alt="green iguana"
              sx={{width: '45px', ml: 2}}
            />
            <CardContent sx={{display: 'flex', width: '100vw'}}>
              <Box>
                <Typography gutterBottom variant="h2" color='text.primary' sx={{fontSize: '22px', fontWeight: 500, mb: 0}}>
                  {crypto.name}
                </Typography>
                <Typography variant="h3" color="text.primary" sx={{fontSize: '22px', fontWeight: 500}}>
                  {crypto.id}
                </Typography>  
              </Box>
              <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', marginLeft: 'auto'}}>
                <Typography gutterBottom variant="h3" color="text.primary"  sx={{fontSize: '22px', fontWeight: 500, mb: 0}}>
                  {'USD$' + parseFloat(crypto.price).toFixed(2)}
                </Typography>
                <Typography variant="h3" color="percent.success" sx={{fontSize: '22px', fontWeight: 500}}>
                  {(parseFloat(crypto['1d'].price_change_pct) * 100).toFixed(2) + '%'}
                </Typography>  
              </Box>
              
            </CardContent>
          </CardActionArea>
        </NeuCard>

      ))}
      <Typography  sx={{ fontSize: '20px', textAlign: 'center', mt: 3}}>
        By: <Link href="https://alwurts.com" color="text.primary" target="_blank">Alwurts</Link>
      </Typography>
      <Typography  sx={{ fontSize: '17px', textAlign: 'center', mt: 1}}>
        <Link href="https://nomics.com" color="text.primary" target="_blank">Crypto Market Cap & Pricing Data Provided By Nomics</Link>
      </Typography>

    </Container>

    
  );
}