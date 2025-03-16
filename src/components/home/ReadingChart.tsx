import React from "react";
import ReactECharts from "echarts-for-react";

type ChartData = {
  time: string;
  value: number;
};

type ReadingChartProps = {
  data: ChartData[];
};

const ReadingChart: React.FC<ReadingChartProps> = ({ data }) => {
  const options: echarts.EChartsOption = {
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
