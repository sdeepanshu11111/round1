import React from "react";
import ReactECharts from "echarts-for-react";
import chartData from "./chartData.json";

const LineChart = () => {
  const options = {
    // grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: chartData.map((e) => e.Flavanoids),
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        data: chartData.map((e) => e.Ash),
        type: "line",
        smooth: true,
        name: "Ash",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      {" "}
      <ReactECharts option={options} />
    </div>
  );
};

export default LineChart;
