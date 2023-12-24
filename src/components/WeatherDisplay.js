// WeatherDisplay.js
import React from 'react';


const WeatherDisplay = ({ weather }) => {
  // Check if weather object and its properties are defined
  if (!weather || !weather.main) 
  {
    return( 
      <div class="invalid-output">
        <p>Invalid city name</p>
      </div>
    );
  };

  return (
    <div class="weather-output">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {Math.round(weather.main.temp)}°F</p>
      <p>Feels like: {Math.round(weather.main.feels_like)}°F</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Wind speed: {Math.round(weather.wind.speed)} mph</p>
    </div>
  );
};

export default WeatherDisplay;
