type WeatherForecastProps = {
  forecast: WeatherDay[];
  loading?: boolean;
  error?: string | null;
};

export const WeatherForecast = ({ forecast, loading = false, error = null }: WeatherForecastProps) => {
  if (loading) {
    return <div className="weather-loading">Завантаження прогнозу...</div>;
  }

  if (error) {
    return <div className="weather-error">Помилка: {error}</div>;
  }

  if (!forecast?.length) {
    return <div className="weather-empty">Немає даних прогнозу</div>;
  }

  return (
    <div className="weather-forecast-container">
      {forecast.map((day, index) => (
        <div
          key={`${day.date}-${index}`}
          className={`weather-day-row ${day.isToday ? 'today' : ''}`}
        >
            
        </div>
      ))}
    </div>
  );
};