import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CustToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  padding: 0,
  borderRadius: '30px',
  background: theme.palette.primary.main,
  boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary),
  
}));

const CustToggle = styled(ToggleButton)(({ theme }) => ({
  padding: 8,
  margin: 2,
  background: theme.palette.primary.main,
  borderBlockColor:'transparent',
  borderRadius: '30px',
  //color: theme.palette.primary.main,
  //backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
  },
  
  '&:active': {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    boxShadow: ('inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ',inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    fontWeight: 800,
    background: theme.palette.primary.main,
    boxShadow: ('inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ',inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
    '&:hover': {

      //color: '#f00',
      background: theme.palette.primary.main,
      boxShadow: ('inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ',inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
    },
  },
  
}));

export default function NeuButtonGroup(props) {

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <CustToggleGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        fullWidth
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <CustToggle value="left" aria-label="left aligned" sx={{fontSize:'18px'}} >
          1M
        </CustToggle>
        <CustToggle value="center" aria-label="centered" sx={{fontSize:'18px'}} >
          1Y
        </CustToggle>
        <CustToggle value="right" aria-label="right aligned" sx={{fontSize:'18px'}} >
          3Y
        </CustToggle>

      </CustToggleGroup>
  );
}