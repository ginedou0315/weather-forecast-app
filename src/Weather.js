import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Prague",
    description: "Mostly Cloudy",
    humidity: "87%",
    wind: "7.2km/h",
    precipitation: "15%",
    temperature: "18",
    date: "Tuesday 11:30 ",
    icon: "☀️",
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <h1 className="current-city pt-3 ps-2">{weatherData.city}</h1>
        <ul className="current-details">
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <span className="current-temperature-icon">{weatherData.icon}</span>
            <span className="current-temperature-value">
              {weatherData.temperature}
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
          <div className="col-6">
            <ul className="current-details">
              <li>
                Precipitation: <strong>{weatherData.precipitation}</strong>
              </li>
              <li>
                Humidity: <strong>{weatherData.humidity}</strong>
              </li>
              <li>
                Wind: <strong>{weatherData.wind}</strong>
              </li>
            </ul>
          </div>
        </div>
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
}
