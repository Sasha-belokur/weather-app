import React from "react";

function DailyForecast(props) {
  return (
    <article class="daily-forecast">
      <time class="daily-forecast__date">April, 18</time>
      <div class="daily-forecast__city-name">Dnipro, UA</div>
      <div class="daily-forecast__temperature">
        15<sup>°</sup> C
      </div>
      <div class="daily-forecast__text">few clouds</div>
      <div class="daily-forecast__extra-info">
        <span>
          <b>Pressure</b>: 1021,
        </span>
        <span>
          <b>Humidity</b>: 59,
        </span>
        <span>
          <b>Wind Speed</b>: 9 m/s,
        </span>
        <span>
          <b>Clouds</b>: 20 %
        </span>
      </div>
    </article>
  );
}

export default DailyForecast;
