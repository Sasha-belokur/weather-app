import React, { Component } from "react";

class Tabs extends Component {
  constructor() {
    super();
    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  tabClickHandler(e) {
    const tab = e.target;
    const chartType = tab.dataset.chartType;

    if (!chartType) return;
    this.activeTab.classList.remove("tabs__item--active");
    tab.classList.add("tabs__item--active");

    this.activeTab = tab;
  }

  render() {
    return (
      <ul className="tabs" onClick={this.tabClickHandler}>
        <li data-chart-type="wind" className="tabs__item">
          Wind
        </li>
        <li
          data-chart-type="temperature"
          className="tabs__item tabs__item--active"
          ref={tab => (this.activeTab = tab)}
        >
          Temperature
        </li>
        <li data-chart-type="presure" className="tabs__item">
          Presure
        </li>
        <li data-chart-type="humidity" className="tabs__item">
          Humidity
        </li>
      </ul>
    );
  }
}

export default Tabs;
