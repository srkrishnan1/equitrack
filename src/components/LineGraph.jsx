import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ...registerables
);

const LineGraph = ({ points, status = "positive", styleConfig }) => {
  const data = {
    labels: "Nigty 50",
    datasets: [
      {
        label: "Data",
        data: points,
        fill: false,
        borderColor: status == "positive" ? "#16a34a" : "#dc2626", // Color for the line
        borderWidth: 1,
        tension: 0,
        pointRadius: 0,
        backgroundColor: "transparent",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    // Allow the chart to adjust its size based on the container
    scales: {
      y: {
        grid: {
          borderDash: [1, 1],
        },
        display: false,
        beginAtZero: false, // Ensure the y-axis doesn't start at zero
        min: Math.min(...points?.map((item) => item.Close)) * 0.999, // Set the min slightly below the lowest value
        max: Math.max(...points?.map((item) => item.Close)) * 1.001, // Set the max slightly above the highest value
        ticks: {
          // Control the appearance of the ticks on the y-axis
          callback: function (value) {
            return value.toFixed(2); // Format y-axis values to 2 decimal places
          },
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 20, // Add padding at the top to center the graph better
        bottom: 10, // Add padding at the bottom as well
      },
    },
  };

  return (
    <div className="graph">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
