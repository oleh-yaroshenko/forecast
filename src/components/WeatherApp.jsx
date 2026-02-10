import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import sun from "../assets/sun.png";
import heart from "../assets/heart.png";
import bin from "../assets/bin.png";
import reload from "../assets/reload.png";

const API_KEY = "533d7532d61d36db17cc95c0414c1870";
const CITY = "Kyiv";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [forecastType, setForecastType] = useState("hourly");
    const [favorites, setFavorites] = useState(false);

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Failed to fetch weather");
            const data = await res.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = () => setFavorites((p) => !p);

    if (loading) return <div className="center">Loading...</div>;
    if (error) return <div className="center">Error: {error}</div>;
    if (!weather) return null;

    const current = weather.list[0];
    const date = new Date(current.dt * 1000);

    return (
        <div className="page">
            <div className="card">
                <div className="card-header">
                    <span>{weather.city.name}</span>
                    <span>{weather.city.country}</span>
                </div>

                <h2 className="time">
                    {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>

                <div className="forecast-buttons">
                    <button onClick={() => setForecastType("hourly")}>Hourly forecast</button>
                    <button onClick={() => setForecastType("weekly")}>Weekly forecast</button>
                </div>

                <div className="date">
                    <div>{date.toLocaleDateString()}</div>
                    <div className="">|</div>
                    <div>{date.toLocaleDateString(undefined, { weekday: "long" })}</div>
                </div>

                <div className="icon">
                    <img src={sun} alt="" />
                </div>

                <h1 className="temp">{Math.round(current.main.temp)}°C</h1>

                <div className="actions">
                    <button onClick={fetchWeather}>
                        <img src={reload} alt="" />
                    </button>
                    <button onClick={toggleFavorite}>
                        <img src={heart} alt="" /></button>
                    <button className="see-more">See more</button>
                    <button onClick={() => setWeather(null)}>
                        <img src={bin} alt="" />
                    </button>
                </div>
            </div>
            <div className="card card-2">
                <div className="card-header">
                    <span>{weather.city.name}</span>
                    <span>{weather.city.country}</span>
                </div>

                <h2 className="time">
                    {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>

                <div className="forecast-buttons">
                    <button onClick={() => setForecastType("hourly")}>Hourly forecast</button>
                    <button onClick={() => setForecastType("weekly")}>Weekly forecast</button>
                </div>

                <div className="date">
                    <div>{date.toLocaleDateString()}</div>
                    <div>{date.toLocaleDateString(undefined, { weekday: "long" })}</div>
                </div>

                <div className="icon">
                    <img src={sun} alt="" />
                </div>

                <h1 className="temp">{Math.round(current.main.temp)}°C</h1>

                <div className="actions">
                    <button onClick={fetchWeather}>
                        <img src={reload} alt="" />
                    </button>
                    <button onClick={toggleFavorite}>
                        <img src={heart} alt="" /></button>
                    <button className="see-more">See more</button>
                    <button onClick={() => setWeather(null)}>
                        <img src={bin} alt="" />
                    </button>
                </div>
            </div>
            <div className="card card-3">
                <div className="card-header">
                    <span>{weather.city.name}</span>
                    <span>{weather.city.country}</span>
                </div>

                <h2 className="time">
                    {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>

                <div className="forecast-buttons">
                    <button onClick={() => setForecastType("hourly")}>Hourly forecast</button>
                    <button onClick={() => setForecastType("weekly")}>Weekly forecast</button>
                </div>

                <div className="date">
                    <div>{date.toLocaleDateString()}</div>
                    <div>{date.toLocaleDateString(undefined, { weekday: "long" })}</div>
                </div>

                <div className="icon">
                    <img src={sun} alt="" />
                </div>

                <h1 className="temp">{Math.round(current.main.temp)}°C</h1>

                <div className="actions">
                    <button onClick={fetchWeather}>
                        <img src={reload} alt="" />
                    </button>
                    <button onClick={toggleFavorite}>
                        <img src={heart} alt="" /></button>
                    <button className="see-more">See more</button>
                    <button onClick={() => setWeather(null)}>
                        <img src={bin} alt="" />
                    </button>
                </div>
            </div>
        </div>

    );
}