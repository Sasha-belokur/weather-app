import React, { Component } from "react";

import Chart from "./Chart";
import Tabs from "./Tabs";

class LongTermForecast extends Component {
  render() {
    return (
      <section className="long-term-forecast">
        <h2 className="long-term-forecast__title">Forecast 5 days</h2>
        <Tabs />
        <Chart chartType="temperature" />
      </section>
    );
  }
}

export default LongTermForecast;
