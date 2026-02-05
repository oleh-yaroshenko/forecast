import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./WeatherChart.css";

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
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "533d7532d61d36db17cc95c0414c1870";
    const CITY = "Dubai";
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        const slicedList = data.list.slice(0, 9);

        const labels = slicedList.map((item) => {
          const date = new Date(item.dt * 1000);
          return `${date.getHours()}:00`;
        });

        const temps = slicedList.map((item) => item.main.temp);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Temperature",
              data: temps,
              borderColor: "#F4A261",
              backgroundColor: "transparent",
              borderWidth: 3,
              tension: 0.4, 
              pointRadius: 4,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "#F4A261",
              pointHoverBorderColor: "#fff",
              pointHoverBorderWidth: 2,
            },
          ],
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        position: "top",
        grid: {
          color: "#d1d1d1",
          drawBorder: false,
        },
        ticks: {
          color: "#333",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          color: "#d1d1d1",
          drawBorder: false,
        },
        ticks: {
          stepSize: 1, 
          callback: (value) => `${value}°C`,
          color: "#333",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  if (loading) {
    return <div className="weather-card">Loading weather data</div>;
  }

  return (
    <div className="weather-chart-wrapper">
      <div className="weather-card">
        <h3 className="weather-title">Hourly forecast </h3>
        <div className="chart-container">
          {chartData && <Line options={options} data={chartData} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;