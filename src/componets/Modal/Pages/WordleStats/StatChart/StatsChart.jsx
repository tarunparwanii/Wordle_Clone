import React, { useContext } from "react";
import { ModalContext } from "../../../Modal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function StatsChart() {
  const { allstats } = useContext(ModalContext);

  const one = allstats.stat_attemptstats.one
    ? allstats.stat_attemptstats.one
    : 0;
  const two = allstats.stat_attemptstats.two
    ? allstats.stat_attemptstats.two
    : 0;
  const three = allstats.stat_attemptstats.three
    ? allstats.stat_attemptstats.three
    : 0;
  const four = allstats.stat_attemptstats.four
    ? allstats.stat_attemptstats.four
    : 0;
  const five = allstats.stat_attemptstats.five
    ? allstats.stat_attemptstats.five
    : 0;
  const six = allstats.stat_attemptstats.six
    ? allstats.stat_attemptstats.six
    : 0;

  const data = {
    labels: ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"],
    datasets: [
      {
        label: "Attempt STATS",
        data: [one, two, three, four, five, six],
        backgroundColor: [
          "rgba(255,255,51, 0.75)",
          "rgba(0, 191, 255, 0.75)",
          "rgba(93, 5, 255, 0.75)",
          "rgba(255, 12, 250, 0.75)",
          "rgba(64, 224, 208, 0.75)",
          "rgba(255, 159, 64, 0.75)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: [true],
    animation: [
      {
        easing: "easeInOutCubic",
      },
    ],
    plugins: {
      legend: {
        labels: {
          color: "#f0f8ff",
          font: 16,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="chart">
      <Doughnut data={data} options={options} />
    </div>
  );
}
