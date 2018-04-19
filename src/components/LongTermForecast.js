import React, { Component } from "react";

import Chart from "./Chart";
import Tabs from "./Tabs";

class LongTermForecast extends Component {
  constructor() {
    super();
    this.state = {
      currentChart: "temp"
    };
    this.changeChart = this.changeChart.bind(this);
  }

  changeChart(type) {
    this.setState({ currentChart: type });
  }

  render() {
    return (
      <section className="long-term-forecast">
        <h2 className="long-term-forecast__title">Forecast 5 days</h2>
        <Tabs onTabClick={this.changeChart} />
        <Chart
          chartType={this.state.currentChart}
          forecast={this.props.forecast}
        />
      </section>
    );
  }
}

export default LongTermForecast;
