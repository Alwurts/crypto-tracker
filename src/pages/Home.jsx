import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import Nomics from "nomics";
 
// ...
 


export default function Home(props) {
 

  React.useEffect(() => {
    props.getCryptos()
 
    
  },[])


  return (

    <Container maxWidth="sm" sx={{ mt: 3, mb: 4 }}>
      <Typography gutterBottom variant="h1" sx={{ fontSize: '38px', textAlign: 'center', mb: 4 }}>
        CRYPTO TRACKER
      </Typography>
      {props.cryptos.map((crypto) => (
        <Card sx={{ my:2 }} key={crypto.id}>
          <CardActionArea sx={{display: 'flex', justifyContent: 'start'}}>
            <CardMedia
              component="img"
              image={crypto.logo_url}
              alt="green iguana"
              sx={{width: '50px', ml: 2}}
            />
            <CardContent sx={{display: 'flex', width: '100vw'}}>
              <Box>
                <Typography gutterBottom variant="h2" sx={{fontSize: '25px', fontWeight: 500, mb: 0}}>
                  
                </Typography>
                <Typography variant="h3" color="text.secondary" sx={{fontSize: '25px', fontWeight: 500}}>
                  {crypto.id}
                </Typography>  
              </Box>
              <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', marginLeft: 'auto'}}>
                <Typography gutterBottom variant="h3" sx={{fontSize: '25px', fontWeight: 500, mb: 0}}>
                  {'USD$' + parseFloat(crypto.price).toFixed(2)}
                </Typography>
                <Typography variant="h3" color="text.secondary" sx={{fontSize: '25px', fontWeight: 500, color:'#9ad00e'}}>
                  {(parseFloat(crypto['1d'].price_change_pct) * 100).toFixed(2) + '%'}
                </Typography>  
              </Box>
              
            </CardContent>
          </CardActionArea>
        </Card>

      ))}


    </Container>

    
  );
}