import React from "react";

import ChartBar from "./ChartBar";
import "./ChartBar.css";

const Chart = (props) => {
  //const dataPointsValues = props.dataPoints.map(dataPoints.value); //transforming to numbers
  //const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
