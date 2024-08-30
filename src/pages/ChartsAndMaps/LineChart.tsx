import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function LineChart() {
  const { isLoading, data } = useQuery("chartData", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  const chartData = useMemo(() => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: "Covid-19 Cases",
          data: [],
          fill: false,
          borderColor: "red",
          tension: 0.1,
        },
      ],
    };

    if (isLoading || data?.length === 0) {
      return chartData;
    }

    chartData.labels = Object.keys(data.cases);
    chartData.datasets[0].data = Object.values(data.cases);

    return chartData;
  }, [data]);

  return (
    <div className="w-full">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Covid-19 Cases",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
