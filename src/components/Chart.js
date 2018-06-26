import React from "react";
import PropTypes from "prop-types";

function Chart(props) {
  const MAX_HEIGHT = 160;
  const arrayValues = props.forecast.map(item => item[props.chartType]);
  const maxValue = Math.max(...arrayValues);
  return (
    <section className="long-term-forecast__chart">
      {props.forecast.map(item => {
        const height = (item[props.chartType] * MAX_HEIGHT) / maxValue + "px";

        return (
          <div key={item.date} className="long-term-forecast__chart-item">
            <div
              className={`long-term-forecast__chart-column long-term-forecast__chart-column--type-${
                props.chartType
              }`}
              style={{ height }}
            >
              {item[props.chartType].toFixed(1)}
            </div>
            <time className="long-term-forecast__chart-label">{item.date}</time>
          </div>
        );
      })}
    </section>
  );
}

Chart.propTypes = {
  forecast: PropTypes.array.isRequired,
  chartType: PropTypes.string.isRequired
};

export default Chart;
