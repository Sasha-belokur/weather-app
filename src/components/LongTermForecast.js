import React, { Component } from "react";
import PropTypes from "prop-types";

import Chart from "./Chart";
import Tabs from "./Tabs";

class LongTermForecast extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "temp"
    };
    this.changeChart = this.changeChart.bind(this);
  }

  static propTypes = {
    forecast: PropTypes.array.isRequired
  };

  changeChart(type) {
    this.setState({ activeTab: type });
  }

  render() {
    const tabLabels = Object.keys(this.props.forecast[0]).filter(
      label => label !== "date"
    );
    return (
      <section className="long-term-forecast">
        <h2 className="long-term-forecast__title">Forecast 5 days</h2>
        <Tabs
          onTabClick={this.changeChart}
          labels={tabLabels}
          activeTab={this.state.activeTab}
        />
        <Chart
          chartType={this.state.activeTab}
          forecast={this.props.forecast}
        />
      </section>
    );
  }
}

export default LongTermForecast;
