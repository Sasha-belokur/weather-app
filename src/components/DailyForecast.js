import React from "react";

function DailyForecast(props) {
  return (
    <article className="daily-forecast">
      <time className="daily-forecast__date">April, 18</time>
      <div className="daily-forecast__city-name">Dnipro, UA</div>
      <div className="daily-forecast__temperature">
        15<sup>°</sup> C
      </div>
      <div className="daily-forecast__text">few clouds</div>
      <div className="daily-forecast__extra-info">
        <span className="daily-forecast__info-item">
          <b>Pressure</b>: 1021
        </span>
        <span className="daily-forecast__info-item">
          <b>Humidity</b>: 59
        </span>
        <span className="daily-forecast__info-item">
          <b>Wind Speed</b>: 9 m/s
        </span>
        <span className="daily-forecast__info-item">
          <b>Clouds</b>: 20 %
        </span>
      </div>
    </article>
  );
}

export default DailyForecast;
