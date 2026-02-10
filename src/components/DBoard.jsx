import React, { useState, useEffect } from 'react';
import './DBoard.css';
import navbg from '../assets/navbg.png';
import searchIcon from '../assets/navlook.png';

const DBoard = () => {
    const [cityText, setCityText] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentDate(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
    const weekDay = currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' });

    const handleSearch = async () => {
        if (!cityText) return;

        console.log(cityText);
    };

    return (
        <section className="dboard">
            <img src={navbg} alt="bg" className="dboard-bg" />
            <div className="dboard-overlay"></div>

            <div className="dboard-content">
                <h1 className="dboard-title">Weather dashboard</h1>

                <div className="dboard-middle">
                    <p className="dboard-description">
                        Create your personal list
                        of favorite cities and always be
                        aware of the weather.
                    </p>

                    <div className="dboard-date">
                        <span className="month">{monthYear}</span>
                        <span className="day">{weekDay}</span>
                    </div>
                </div>

                <form className="search-box" onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <input
                        type="text"
                        placeholder="Search location..."
                        className="search-input"
                        value={cityText}
                        onChange={(e) => setCityText(e.target.value)}
                    />
                    <button type="submit" className="search-submit">
                        <img src={searchIcon} alt="search" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default DBoard;