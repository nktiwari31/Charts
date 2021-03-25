import Chart from "react-apexcharts";
import "../../App.css";

const Histogram = () => {
  const barSeries = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const barOptions = {
    chart: {
      type: "histogram",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <div id="chart1">
      <Chart
        options={barOptions}
        series={barSeries}
        type="histogram"
        height={350}
      />
    </div>
  );
};

export default Histogram;
