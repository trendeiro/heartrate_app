import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { arrangeDate } from "../../js/bdDataManage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export function Chart({ data: dbData }) {
  const filterOpt = useSelector((state) => state.chart.filterOpt);

  const labels = dbData.map((dateTime) => {
    const arragedDate = arrangeDate(dateTime.dateTime);
    return arragedDate;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Min",
        data: dbData.map((minimum) => {
          if (
            parseInt(minimum.minimum) >= filterOpt.min.min &&
            parseInt(minimum.minimum) <= filterOpt.min.max
          ) {
            return minimum.minimum;
          }
          return null;
        }),
        borderColor: "rgb(55, 178, 77)",
        backgroundColor: "rgba(55, 178, 77, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Max",
        data: dbData.map((maximum) => {
          if (
            parseInt(maximum.maximum) >= filterOpt.max.min &&
            parseInt(maximum.maximum) <= filterOpt.max.max
          ) {
            return maximum.maximum;
          }
          return null;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Average",
        data: dbData.map((meanAverage) => {
          if (
            parseInt(meanAverage.meanAverage) >= filterOpt.ave.min &&
            parseInt(meanAverage.meanAverage) <= filterOpt.ave.max
          ) {
            return meanAverage.meanAverage;
          }
          return null;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}

export default Chart;
