import React from "react";

import DailyForecast from "./DailyForecast";
import LongTermForecast from "./LongTermForecast";
import Loader from "./Loader";

function Forecast(props) {
  console.log(props);
  return props.isLoaderShown ? (
    <Loader />
  ) : (
    <div>
      <DailyForecast city={props.currentCity} forecast={props.dailyForecast} />
      <LongTermForecast />
    </div>
  );
}

export default Forecast;
