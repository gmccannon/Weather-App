// App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import DefaultPage from './components/DefaultPage';


const App = () => {
  const [weather, setWeather] = useState(null);

  const searchWeather = async (city) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

      // Fetch current weather data
      const response = await fetch(apiUrl);
      const currentWeatherData = await response.json();

      // Update state with current weather
      setWeather(currentWeatherData);

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="app-container">
      <header>
        <SearchForm onSearch={searchWeather} />
        <h1>Weather App</h1>
      </header>

      <div className="content">
        {weather && <WeatherDisplay weather={weather}/>}
        {!weather && <DefaultPage />}
      </div>

      <footer>
        <h3>Made by GM 2023</h3>
      </footer>
    </div>
  );
};

export default App;
