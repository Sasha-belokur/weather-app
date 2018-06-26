import React from "react";
import { capitalize } from "../utils";

const Tab = props => {
  const isActive = props.isActive ? "tabs__item--active" : "";
  const assignedClasses = "tabs__item " + isActive;

  return (
    <li tabIndex="0" data-chart-type={props.label} className={assignedClasses}>
      {capitalize(props.label)}
    </li>
  );
};

export default Tab;
