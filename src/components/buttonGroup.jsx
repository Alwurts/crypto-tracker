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

  
  const handleChangePeriod = (event, newPeriod) => {
    if (newPeriod !== null){
      props.setTimeButtonGroup(newPeriod);
    }
  };

  return (
      <CustToggleGroup
        value={props.timeButtonGroup}
        exclusive
        onChange={handleChangePeriod}
        aria-label="Chart time period"
        fullWidth
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <CustToggle value="3" aria-label="1 month" sx={{fontSize:'18px'}} >
          1M
        </CustToggle>
        <CustToggle value="2" aria-label="3 month" sx={{fontSize:'18px'}} >
          3M
        </CustToggle>
        <CustToggle value="1" aria-label="1 year" sx={{fontSize:'18px'}} >
          1Y
        </CustToggle>

      </CustToggleGroup>
  );
}