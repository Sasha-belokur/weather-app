import React, { Component } from "react";

class Tabs extends Component {
  constructor() {
    super();
    this.tabClickHandler = this.tabClickHandler.bind(this);
    this.tabKeyUpHandler = this.tabKeyUpHandler.bind(this);
    this.handleTabAction = this.handleTabAction.bind(this);
  }

  handleTabAction(tab, chartType) {
    const activeTab = document.querySelector(".tabs__item--active");
    activeTab.classList.remove("tabs__item--active");
    tab.classList.add("tabs__item--active");

    this.props.onTabClick(chartType);
  }

  tabClickHandler(e) {
    const tab = e.target;
    const chartType = tab.dataset.chartType;

    if (!chartType) return;
    this.handleTabAction(tab, chartType);
  }

  tabKeyUpHandler(e) {
    const tab = e.target;
    const chartType = tab.dataset.chartType;

    if (!chartType || e.keyCode !== 13) return;
    this.handleTabAction(tab, chartType);
  }

  render() {
    return (
      <ul
        className="tabs"
        onClick={this.tabClickHandler}
        onKeyUp={this.tabKeyUpHandler}
      >
        <li tabIndex="0" data-chart-type="wind" className="tabs__item">
          Wind
        </li>
        <li
          tabIndex="0"
          data-chart-type="temp"
          className="tabs__item tabs__item--active"
        >
          Temperature
        </li>
        <li tabIndex="0" data-chart-type="presure" className="tabs__item">
          Presure
        </li>
        <li tabIndex="0" data-chart-type="humidity" className="tabs__item">
          Humidity
        </li>
      </ul>
    );
  }
}

export default Tabs;
