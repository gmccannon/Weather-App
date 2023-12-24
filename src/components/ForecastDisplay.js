// ForecastDisplay.js
import React from 'react';

const ForecastDisplay = ( {forecast} ) => {
    // Check if weather object and its properties are defined
    if (!forecast) 
    {
      return( 
        <div class="invalid-output">
          <p>Invalid this city name</p>
        </div>
      );
    };
  
    return (
      <div class="forecast-output">
      <h2>{forecast.city.name}, {forecast.city.country}</h2>
      <p>Temperature: {Math.round(forecast.list[0].main.temp)}°F</p>
      <p>Feels like: {Math.round(forecast.list[0].main.feels_like)}°F</p>
      <p>Weather: {forecast.list[0].weather.description}</p>
      <p>Wind speed: {Math.round(forecast.list[0].wind.speed)} mph</p>
      </div>
    );
  };
  
  export default ForecastDisplay;