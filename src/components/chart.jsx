import * as React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { darkScrollbar } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function NeuLine(props) {

  var labelPeriod
  switch (props.timeButtonGroup) {
    case '1':
      labelPeriod= props.cryptoHistory[0];
      break;
    case '2':
      labelPeriod= props.cryptoHistory[0].slice(-93,-1);
      break;
    case '3':
      labelPeriod= props.cryptoHistory[0].slice(-31,-1);
      break;
  }

  var dataPeriod
  switch (props.timeButtonGroup) {
    case '1':
      dataPeriod= props.cryptoHistory[1];
      break;
    case '2':
      dataPeriod= props.cryptoHistory[1].slice(-93,-1);
      break;
    case '3':
      dataPeriod= props.cryptoHistory[1].slice(-31,-1);
      break;
  }

  const data = {
    
    labels: labelPeriod, // 1 Year


    datasets: [
      {
        //label: "First dataset",
        data: dataPeriod,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const options = {
    responsive: true,
    bezierCurve : true,
    interaction: {
      intersect: false,
      axis: 'x',
      mode: 'index',
    },
    elements: {
      point:{
        hoverRadius: 0,
        hoverBackgroundColor: '#000',
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Crypto History',
      },
      tooltip: {
        enabled: false,
        external: function(context) {
      
          // Hide if no tooltip
          const tooltipModel = context.tooltip;

          function getBody(bodyItem) {
              return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
              const titleLines = tooltipModel.title || [];
              const bodyLines = tooltipModel.body.map(getBody);

              //console.log(titleLines[0])
              props.setBarDate(titleLines[0])
              //console.log(bodyLines[0][0])
              props.setBarPrice(bodyLines[0][0])

              
          }

      
        }
        
      },
    },

    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: false,
        }
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: false,
        }
      },
    },    
  };

  return (
      <Line 
        data={data} 
        options={options}
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
  );
}