import { Bar } from 'react-chartjs-2';
import React from 'react';

const options = {
  responsive: true,
  tooltips: {
    mode: 'label',
  },
  scales: {
    x: {
      display: false,
    },
    yAxes: [{  
      display: true,    
      ticks: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100
      }
    }],
  },
};

export default function DashboardMixChartOne(props) {
  return <Bar data={props.data} options={options}/>;
}
