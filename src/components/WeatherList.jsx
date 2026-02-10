import React, { useState, useEffect } from 'react';
import "./WeatherList.css"

const API_KEY = '533d7532d61d36db17cc95c0414c1870';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=${API_KEY}&units=metric;`

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      const processedData = processForecastData(data.list);
      setWeatherData(processedData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const processForecastData = (forecastList) => {
    const dailyData = {};

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });

      if (!dailyData[dateKey]) {
        dailyData[dateKey] = {
          date: dateKey,
          temp: Math.round(item.main.temp),
          condition: item.weather[0].description,
          icon: item.weather[0].icon,
          weatherId: item.weather[0].id
        };
      }
    });

    return Object.values(dailyData).slice(0, 8);
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weekly forecast</h2>

      <div className="weather-list">
        {weatherData.map((item, index) => (
          <div key={index} className="weather-row">
            <span className="weather-day">{item.date}</span>

            <span className="weather-temp">{item.temp}°C</span>

            <span className="weather-condition">{item.condition}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;