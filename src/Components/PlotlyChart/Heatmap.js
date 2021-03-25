/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Plotly from "plotly.js-cartesian-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import { layout, heatmap } from "plotly-js-material-design-theme";
import "../../App.css";

const HeatMapPlotly = () => {
  const Plot = createPlotlyComponent(Plotly);

  const chart = heatmap(
    <Plot
      layout={layout({
        title: "Heatmap Chart",
      })}
      data={[
        {
          z: [
            [1, 40, 30, 50, 1],
            [20, 1, 60, 80, 30],
            [30, 60, 1, -10, 20],
          ],
          x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          y: ["Morning", "Afternoon", "Evening"],
          type: "heatmap",
          autocolorscale: false,
          colorscale: [
            ["0", "#4285f4"],
            ["1", "#93d5ed"],
          ],
          colorbar: {
            len: 1,
            outlinewidth: 0,
            tickfont: {
              color: "#757575",
            },
          },
        },
      ]}
    />
  );

  // const chart = (
  //   <Plot
  //     data={[
  //       {
  // z: [
  //   [1, null, 30, 50, 1],
  //   [20, 1, 60, 80, 30],
  //   [30, 60, 1, -10, 20],
  // ],
  // x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  // y: ["Morning", "Afternoon", "Evening"],
  //         type: "heatmap",
  //         hoverongaps: false,
  //       },
  //     ]}
  //   />
  // );

  return <div id="chart">{chart}</div>;
};

export default HeatMapPlotly;
