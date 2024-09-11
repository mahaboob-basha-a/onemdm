import { Radar } from 'react-chartjs-2';
import React from 'react';

const options = {
  elements: {
    line: {
      borderWidth: 2,
    }
  },
  scale: {
    angleLines: {
        display: false
    },
    ticks: {
        suggestedMin: 0,
        suggestedMax: 100
    }
  }
};


export default function DashboardRadarChart(props) {

    return <Radar data={props.data} options={options} />;
}
