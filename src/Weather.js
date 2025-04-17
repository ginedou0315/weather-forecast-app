import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Prague",
    description: "rainy",
    humidity: "87%",
    wind: "7.2km/h",
    temperature: "24",
    date: "Tuesday, 11:30, ",
    icon: "☀️",
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <header>
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <main>
          <div className="current-weather">
            <div>
              <h1 className="current-city">{weatherData.city}</h1>
              <p className="current-details">
                <span>{weatherData.date}</span>
                <span>{weatherData.description}</span>
                <br />
                Humidity: <strong>{weatherData.humidity}</strong>, Wind:{" "}
                <strong>{weatherData.wind}</strong>
              </p>
            </div>
            <div className="current-temperature">
              <span className="current-temperature-icon">
                {weatherData.icon}
              </span>
              <span className="current-temperature-value">
                {weatherData.temperature}
              </span>
              <span className="current-temperature-unit">°C</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
