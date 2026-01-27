import React from 'react';
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

import './WeatherChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y}°C`,
        },
      },
    },
    scales: {
      x: {
        position: 'top',
        grid: {
          color: '#d1d1d1',
          drawBorder: false,
        },
        ticks: {
          color: '#333',
          font: { size: 12 },
        },
      },
      y: {
        min: 5,
        max: 30,
        grid: {
          color: '#d1d1d1',
          drawBorder: false,
        },
        ticks: {
          stepSize: 5,
          callback: (value) => `${value}°C`,
          color: '#333',
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  const data = {
    labels: ['11 pm', 'Oct 14', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
    datasets: [
      {
        label: 'Temperature',
        data: [13.5, 12, 11, 10.1, 9.9, 9.8, 10.2, 11.5, 12.1, 12.8, 13.5, 15.2, 17.5, 18.2, 19.4, 21.2, 23.8, 25.1, 25.9, 26.0],
        borderColor: '#F4A261',
        backgroundColor: 'transparent',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#F4A261',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <div className="weather-card">
      <h3 className="weather-title">Hourly forecast</h3>
      <div className="chart-container">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default WeatherChart;