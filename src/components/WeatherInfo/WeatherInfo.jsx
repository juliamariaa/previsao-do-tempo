import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({ weatherData }) => {
  const iconUrl = weatherData.weather && weatherData.weather[0].icon 
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    : null;

  const tempCelsius = Math.round(weatherData.main.temp - 273.15);

  return (
    <div className="WeatherInfoContainer">
      <div className="weather-details">
        <div className="location-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
        </div>

        <div className="weather-icon">
          {iconUrl && <img src={iconUrl} alt="Ícone do clima" width={56} height={56} />}
        </div>
      </div>

      <div className="temperature-display">
        <p>{tempCelsius}°C</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
