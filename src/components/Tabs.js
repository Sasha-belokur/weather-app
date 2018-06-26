import React, { Component } from "react";
import Tab from "./Tab";

class Tabs extends Component {
  handleTabAction = chartType => {
    this.props.onTabClick(chartType);
  };

  tabClickHandler = e => {
    const tab = e.target;
    const chartType = tab.dataset.chartType;

    if (!chartType) return;
    this.handleTabAction(chartType);
  };

  tabKeyUpHandler = e => {
    const tab = e.target;
    const chartType = tab.dataset.chartType;

    if (!chartType || e.keyCode !== 13) return;
    this.handleTabAction(chartType);
  };

  render() {
    return (
      <ul
        className="tabs"
        onClick={this.tabClickHandler}
        onKeyUp={this.tabKeyUpHandler}
      >
        {this.props.labels.map(label => {
          const isActive = label === this.props.activeTab;
          return <Tab key={label} label={label} isActive={isActive} />;
        })}
      </ul>
    );
  }
}

export default Tabs;
