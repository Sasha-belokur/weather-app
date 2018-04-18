import React from "react";
import sun from "../sun.svg";

function Loader() {
  return (
    <div className="loader">
      <img alt="spinner" width="300px" height="300px" src={sun} />
    </div>
  );
}

export default Loader;
