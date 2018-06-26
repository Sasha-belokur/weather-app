import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    onTabClick: PropTypes.func.isRequired,
    labels: PropTypes.array.isRequired,
    activeTab: PropTypes.string.isRequired
  };

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
          return (
            <Tab key={shortid.generate()} label={label} isActive={isActive} />
          );
        })}
      </ul>
    );
  }
}

export default Tabs;
