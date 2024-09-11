import { Doughnut } from 'react-chartjs-2';
import React from 'react';

export default function DashboardDoughnutChart(props) {
  return <Doughnut data={props.data} />;
}
