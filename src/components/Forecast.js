import React from "react";

import DailyForecast from "./DailyForecast";
import LongTermForecast from "./LongTermForecast";

function Forecast() {
  return (
    <div>
      <DailyForecast />
      <LongTermForecast />
    </div>
  );
}

export default Forecast;
