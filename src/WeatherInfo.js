import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="current-city pt-3 ps-2">{props.data.city}</h1>
      <ul className="current-details">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="current-temperature-icon">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="current-temperature-value">
            {Math.round(props.data.temperature)}
          </span>
          <span className="current-temperature-unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="current-details">
            <li>
              Precipitation: <strong>%</strong>
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
