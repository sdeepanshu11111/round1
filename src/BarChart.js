import ReactEcharts from "echarts-for-react";
import chartData from "./chartData.json";

let alcoholCats = [...new Set(chartData.map((e) => e.Alcohol))];

let uniqueVal = [];

for (let index = 0; index < alcoholCats.length; index++) {
  let fill = Math.min(
    ...chartData
      .filter((e) => e.Alcohol === alcoholCats[index])
      .map((e) => e.Magnesium)
  );

  uniqueVal.push(fill);
}

const options = {
  //   grid: { top: 8, right: 8, bottom: 24, left: 36 },

  xAxis: {
    type: "category",
    data: alcoholCats,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Magnesium",
      data: uniqueVal,
      type: "bar",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

function BarChart() {
  return <ReactEcharts option={options}></ReactEcharts>;
}

export default BarChart;
