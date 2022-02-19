import * as React from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


const CustLoading = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.loading.primary,
}));

export default function NeuLoading(props) {
  

  return (

    <CustLoading
      sx={[
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
      size={props.size}
    />
  );
}