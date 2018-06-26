import React from "react";
import PropTypes from "prop-types";

function ErrorMessage(props) {
  return props.message ? <div className="error-msg">{props.message}</div> : "";
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
