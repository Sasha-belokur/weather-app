import React from "react";

function ErrorMessage(props) {
  return props.message ? <div className="error-msg">{props.message}</div> : "";
}

export default ErrorMessage;
