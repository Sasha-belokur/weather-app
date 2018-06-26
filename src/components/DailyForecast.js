import React from "react";
import PropTypes from "prop-types";

import { getCurrentDay } from "../utils";

function DailyForecast(props) {
  const city = props.city;
  const { humidity, temp, pressure } = props.forecast.main;
  const { description } = props.forecast.weather[0];
  const wind = props.forecast.wind.speed.toFixed(1);
  const clouds = props.forecast.clouds.all;
  return (
    <article className="daily-forecast">
      <time className="daily-forecast__date">{getCurrentDay()}</time>
      <div className="daily-forecast__city-name">{city}</div>
      <div className="daily-forecast__temperature">
        {Math.round(temp)}
        <sup>°</sup>C
      </div>
      <div className="daily-forecast__text">{description}</div>
      <div className="daily-forecast__extra-info">
        <span className="daily-forecast__info-item">
          <b>Pressure</b>: {pressure}
        </span>
        <span className="daily-forecast__info-item">
          <b>Humidity</b>: {humidity}
        </span>
        <span className="daily-forecast__info-item">
          <b>Wind Speed</b>: {wind} m/s
        </span>
        <span className="daily-forecast__info-item">
          <b>Clouds</b>: {clouds} %
        </span>
      </div>
    </article>
  );
}

DailyForecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired
};

export default DailyForecast;
