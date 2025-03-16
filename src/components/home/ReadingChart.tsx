import React from "react";
import ReactECharts from "echarts-for-react";
const ReadingChart = ({
  data,
}: {
  data: { time: string; value: number }[];
}) => {
  const options: any = {
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: data.map((d) => d.time) },
    yAxis: { type: "value" },
    series: [
      {
        data: data.map((d) => d.value),
        type: "line",
        smooth: true,
        lineStyle: { width: 3 },
        itemStyle: { color: "#FF5733" },
      },
    ],
  };
  return <ReactECharts option={options} style={{ height: 400 }} />;
};

export default ReadingChart;
