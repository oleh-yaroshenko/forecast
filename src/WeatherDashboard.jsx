import React, { useEffect, useState } from "react";

const API_KEY = "533d7532d61d36db17cc95c0414c1870";

const countries = {
  ua: { name: "Ukraine", city: "Kyiv" },
};

function WeatherDashboard() {
  const [country, setCountry] = useState("ua");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const city = countries[country].city;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [country]);

  return (
    <div>
      <div className="mb-4">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {Object.entries(countries).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
