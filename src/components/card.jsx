import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';



const CustCard = styled(Card)(({ theme }) => ({
  padding: 0,
  borderRadius: '30px',
  background: theme.palette.primary.main,
  boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary),
  //boxShadow: theme.palette.mode === 'dark' ? '7px 7px 16px #242424, -7px -7px 16px #323232' : '7px 7px 10px #cccccc, -7px -7px 10px #f4f4f4',
  overflow: 'unset', 
  //transitionDelay: '4s',
  transitionDuration: '1ms',
  '&:active': {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary + ',inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ', inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
  },

}));

export default function NeuCard(props) {
  return (
      <CustCard
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
         
      
      >
        {props.children}
      </CustCard>
  );
}