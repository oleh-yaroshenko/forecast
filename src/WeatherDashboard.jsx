import { useEffect, useState } from "react";
import "./WeatherDashboard.css";
import termometer from "./images-weather/termometer.svg";
import clowd from "./images-weather/clowd.svg";
import pressure from "./images-weather/pressure.svg";
import wind from "./images-weather/wind.svg";
import visibility from "./images-weather/visibility.svg";

const API_KEY = "533d7532d61d36db17cc95c0414c1870";
const CITY = "Kyiv";

export default function WeatherDashboard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error(err));
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="weather-grid">
      <WeatherCard title="Feels like">
        {weather.main.feels_like.toFixed(1)}°C
        <br />
        <img src={termometer} alt="" />
      </WeatherCard>

      <WeatherCard title="Min °C">
        {weather.main.temp_min.toFixed(1)}°C
        <br />
       <small>Max °C</small>  {weather.main.temp_max.toFixed(1)}°C
      </WeatherCard>

      <WeatherCard title="Humidity">
      {weather.main.humidity}%
      <br />
        <img src={clowd} alt="" />
      </WeatherCard>

      <WeatherCard title="Pressure">
        {weather.main.pressure} hPa
        <br />
        <img src={pressure} alt="" />
      </WeatherCard>

      <WeatherCard title="Wind speed">
        {weather.wind.speed} m/s
        <br />
        <img src={wind} alt="" />
      </WeatherCard>

      
    </div>
  );
}

function WeatherCard({ title, children }) {
  return (
    <div className="weather-card">
      <p className="weather-title">{title}</p>
      <div className="weather-value">{children}</div>
    </div>
  );
}
