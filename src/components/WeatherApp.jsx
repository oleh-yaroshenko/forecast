import { useEffect, useState, useCallback } from "react";
import "./WeatherApp.css";
import sun from "../assets/sun.png";
import heart from "../assets/heart.png";
import bin from "../assets/bin.png";
import reload from "../assets/reload.png";

const API_KEY = "533d7532d61d36db17cc95c0414c1870";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const buildForecastUrl = (city) =>
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

export default function WeatherApp({ city, onSeeMore }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeather = useCallback(async () => {
        if (!city) return;
        try {
            setLoading(true);
            const res = await fetch(buildForecastUrl(city));
            if (!res.ok) throw new Error("Failed to fetch weather");
            const data = await res.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [city]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    if (loading) return <div className="center">Loading...</div>;
    if (error) return <div className="center">Error: {error}</div>;
    if (!weather) return null;

    const current = weather.list[0];
    const date = new Date(current.dt * 1000);

    const cards = ["", "card-2", "card-3"];

    return (
        <div className="page">
            {cards.map((className, index) => (
                <div key={index} className={`card ${className}`.trim()}>
                    <div className="card-header">
                        <span>{weather.city.name}</span>
                        <span>{weather.city.country}</span>
                    </div>

                    <h2 className="time">
                        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </h2>

                    <div className="forecast-buttons">
                        <button>Hourly forecast</button>
                        <button>Weekly forecast</button>
                    </div>

                    <div className="date">
                        <div>{date.toLocaleDateString()}</div>
                        <div className="">|</div>
                        <div>{date.toLocaleDateString(undefined, { weekday: "long" })}</div>
                    </div>

                    <h1 className="temp">{Math.round(current.main.temp)}°C</h1>

                    <div className="actions">
                        <button onClick={fetchWeather}>
                            <img src={reload} alt="" />
                        </button>
                        <button>
                            <img src={heart} alt="" />
                        </button>
                        <button className="see-more" onClick={onSeeMore}>See more</button>
                        <button onClick={() => setWeather(null)}>
                            <img src={bin} alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
}
