import React from "react";
import PropTypes from "prop-types";

import DailyForecast from "./DailyForecast";
import LongTermForecast from "./LongTermForecast";
import Loader from "./Loader";

function Forecast(props) {
  return props.isLoaderShown ? (
    <Loader />
  ) : (
    <div>
      <DailyForecast city={props.currentCity} forecast={props.dailyForecast} />
      <LongTermForecast forecast={props.forecast} />
    </div>
  );
}

Forecast.propTypes = {
  currentCity: PropTypes.string,
  forecast: PropTypes.array,
  dailyForecast: PropTypes.object
};

export default Forecast;
