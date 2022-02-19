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
  '&:hover': {
    background: theme.palette.primary.main,
    boxShadow: '7px 7px 16px #c7c7c7,-7px -7px 16px #f9f9f9',
  },
  '&:active': {
    background: theme.palette.primary.main,
    boxShadow: 'inset 7px 7px 20px #c7c7c7, inset -7px -7px 20px #f9f9f9',
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