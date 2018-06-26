import React from "react";
import PropTypes from "prop-types";
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

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Tab;
