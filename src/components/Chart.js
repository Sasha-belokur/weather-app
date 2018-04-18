import React from "react";

function Chart(props) {
  return (
    <section className="long-term-forecast__chart">{props.chartType}</section>
  );
}

export default Chart;
