import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e430a0b40t5635ffab9bc012406aa3ao";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="form-control search-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast
            coordinates={weatherData.coordinates}
            city={weatherData.city}
          />
        </div>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/ginedou0315" target="_blank">
            Ginelle Doubek
          </a>
          , is open-sourced in{" "}
          <a
            href="https://github.com/ginedou0315/weather-forecast-app"
            target="_blank"
          >
            Github
          </a>{" "}
          and hosted in
          <a href="#" target="_blank">
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
