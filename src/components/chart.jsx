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

  var labelPeriod=[]
  var dataPeriod=[]
  // Check if there is already data in the state, if not dont try to access it
  if (props.cryptoHistory){ 
    switch (props.timeButtonGroup) {
      case '1':
        labelPeriod= props.cryptoHistory[0];
        break;
      case '2':
        labelPeriod= props.cryptoHistory[0].slice(-365,-1);
        break;
      case '3':
        labelPeriod= props.cryptoHistory[0].slice(-93,-1);
        break;
    }
  
    switch (props.timeButtonGroup) {
      case '1':
        dataPeriod= props.cryptoHistory[1];
        break;
      case '2':
        dataPeriod= props.cryptoHistory[1].slice(-365,-1);
        break;
      case '3':
        dataPeriod= props.cryptoHistory[1].slice(-93,-1);
        break;
    }
  }


  const data = {
    
    labels: labelPeriod, // 1 Year


    datasets: [
      {
        //label: "First dataset",
        data: dataPeriod,
        normalized: true,
        spanGaps: true,
        
        //parsing: false, // Helps with performance if data is imported in the right format
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };


  const myEventCatcher = {
   
      id: 'myEventCatcher',
      afterEvent: (chart,e) => {
        //console.log(e)
        if(e.event.type=="mouseup" || e.event.type == 'mouseout'){
          props.setBarPrice()
          props.setBarDate()
        }
        
        //console.log("Mouse out")
      }
    

  }

  const tooltipLine = {

    afterDatasetsDraw: chart => {
      //console.log(chart)
      if (chart.tooltip._active && chart.tooltip._active.length){
        //console.log('line...')
        const ctx = chart.ctx;
        ctx.save();
        const activePoint = chart.tooltip._active[0]
        ctx.beginPath();
        ctx.moveTo(activePoint.element.x, chart.chartArea.top);
        ctx.lineTo(activePoint.element.x, activePoint.element.y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'text.primary';
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.moveTo(activePoint.element.x, activePoint.element.y);
        ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.restore();

      }
      //console.log('line...')
    }
  }
  const options = {
    responsive: true,
    aspectRatio: 1.4,
    events: ['mousemove', 'mouseout', 'touchstart', 'touchmove','touchend'],
  
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
      },
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
    animation: {
      duration: 700,
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

          if (tooltipModel.opacity === 0) {
            //console.log("Not showing")
         }

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

     
  };

  return (
      <Line 
        data={data} 
        options={options}
        plugins={[tooltipLine, myEventCatcher]}
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
  );
}