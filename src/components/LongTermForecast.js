import React from "react";

import Chart from "./Chart";

function LongTermForecast() {
  return (
    <section className="long-term-forecast">
      <h2 className="long-term-forecast__title">Forecast 5 days</h2>
      <Chart chartType="temperature" />
    </section>
  );
}

export default LongTermForecast;
