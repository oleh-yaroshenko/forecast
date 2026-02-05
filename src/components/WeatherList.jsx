import React, { useState } from 'react';

const mockWeatherData = [
  { id: 1, day: 'Fri, Oct 13', temp: '24', condition: 'light rain' },
  { id: 2, day: 'Sat, Oct 14', temp: '22', condition: 'light rain' },
  { id: 3, day: 'Sun, Oct 15', temp: '26', condition: 'light rain' },
  { id: 4, day: 'Mon, Oct 16', temp: '25', condition: 'few clouds' },
  { id: 5, day: 'Tue, Oct 17', temp: '26', condition: 'few clouds' },
  { id: 6, day: 'Wed, Oct 18', temp: '25', condition: 'clear sky' },
  { id: 7, day: 'Thu, Oct 19', temp: '28', condition: 'overcast clouds' },
  { id: 8, day: 'Fri, Oct 20', temp: '27', condition: 'scattered clouds' }
];

const WeatherList = () => {
  const [weatherData] = useState(mockWeatherData);

  return (
    <div className="weather-container">
      <h2 className="weather-title">8-day forecast</h2>

      <div className="weather-list">
        {weatherData.map((item) => (
          <div key={item.id} className="weather-row">
            <span className="weather-day">{item.day}</span>

            <span className="weather-temp">{item.temp}°C</span>

            <span className="weather-condition">{item.condition}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .weather-container {
          width: 100%;
          max-width: 420px;
          margin: 20px auto;
          background: linear-gradient(135deg, #e0e0e0 0%, #cfcfcf 100%);
          border-radius: 20px;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .weather-title {
          margin: 0 0 20px 0;
          font-size: 15px;
          font-weight: 600;
          color: #2c2c2c;
          letter-spacing: 0.3px;
        }

        .weather-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .weather-row {
          display: grid;
          grid-template-columns: 110px 56px 70px 1fr;
          align-items: center;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          gap: 10px;
          transition: background 0.2s ease;
        }

        .weather-row:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .weather-day {
          font-size: 13px;
          color: #3a3a3a;
          font-weight: 500;
        }

        .weather-temp {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .weather-condition {
          font-size: 13px;
          color: #4a4a4a;
          text-align: right;
          font-weight: 400;
        }

        @media (max-width: 480px) {
          .weather-container {
            max-width: 100%;
            margin: 10px;
            padding: 16px;
            border-radius: 16px;
          }

          .weather-title {
            font-size: 14px;
            margin-bottom: 16px;
          }

          .weather-row {
            grid-template-columns: 90px 50px 60px 1fr;
            padding: 8px 10px;
            gap: 8px;
          }

          .weather-day {
            font-size: 12px;
          }

          .weather-temp {
            font-size: 14px;
          }

          .weather-condition {
            font-size: 11px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .weather-container {
            max-width: 90%;
            padding: 20px;
          }

          .weather-row {
            grid-template-columns: 100px 54px 65px 1fr;
            padding: 9px 12px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .weather-container {
            max-width: 500px;
            padding: 26px;
          }

          .weather-row {
            grid-template-columns: 130px 60px 80px 1fr;
            padding: 12px 16px;
            gap: 12px;
          }

          .weather-day {
            font-size: 14px;
          }
            .weather-temp {
            font-size: 17px;
          }

          .weather-condition {
            font-size: 14px;
          }
        }

        @media (min-width: 1025px) {
          .weather-container {
            max-width: 550px;
            padding: 28px;
          }

          .weather-title {
            font-size: 16px;
            margin-bottom: 22px;
          }

          .weather-row {
            grid-template-columns: 140px 64px 85px 1fr;
            padding: 12px 18px;
            gap: 14px;
          }

          .weather-day {
            font-size: 14px;
          }

          .weather-temp {
            font-size: 18px;
          }

          .weather-condition {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default WeatherList;