import React, { Component } from "react";

class Tabs extends Component {
  constructor() {
    super();
    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  tabClickHandler(e) {
    const tab = e.target;
    const chartType = tab.dataset.chartType;
    const activeTab = document.querySelector(".tabs__item--active");

    if (!chartType) return;
    activeTab.classList.remove("tabs__item--active");
    tab.classList.add("tabs__item--active");

    this.props.onTabClick(chartType);
  }

  render() {
    return (
      <ul className="tabs" onClick={this.tabClickHandler}>
        <li tabIndex="1" data-chart-type="wind" className="tabs__item">
          Wind
        </li>
        <li
          tabIndex="1"
          data-chart-type="temp"
          className="tabs__item tabs__item--active"
        >
          Temperature
        </li>
        <li tabIndex="1" data-chart-type="presure" className="tabs__item">
          Presure
        </li>
        <li tabIndex="1" data-chart-type="humidity" className="tabs__item">
          Humidity
        </li>
      </ul>
    );
  }
}

export default Tabs;
