import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(...registerables, ArcElement, Tooltip, Legend, CategoryScale);

function BarChartElement({ list_year_info, list_pos_info, list_background_color, title, axis, x_label, y_label }) {
  const options = {
    responsive: true,
    indexAxis: axis,
    scales: {
      y: {
        title: {
          display: true,
          text: y_label
        }
      },
      x: {
        title: {
          display: true,
          text: x_label
        }
      }
    }   
  };
  
  const data = {
    labels: list_year_info,
    datasets: [{
      label: title,
      data: list_pos_info,
      backgroundColor: list_background_color,
      borderWidth: 1
    }]
  };
  return (
    <Bar data={data} options={options} />
  )
}

export default BarChartElement