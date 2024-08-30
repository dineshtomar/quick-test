import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Column Chart",
    },
  },
  maintainAspectRatio: false,
};

const GroupedBar = React.memo((props: any) => {
  return (
    <>
      <Bar options={options} data={props.dataset} />
    </>
  );
});

export default GroupedBar;
