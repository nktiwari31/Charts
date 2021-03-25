/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Plotly from "plotly.js-cartesian-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import { layout, histogram } from "plotly-js-material-design-theme";
import "../../App.css";

const HistogramPlotly = () => {
  const Plot = createPlotlyComponent(Plotly);
  var x1 = [];
  var x2 = [];
  for (var i = 1; i < 500; i++) {
    x1.push(Math.random() + 1);
    x2.push(Math.random() + 1.1);
  }

  // const gaussianRand = () => {
  //   var rand = 0;

  //   for (var i = 0; i < 500; i += 1) {
  //     rand += Math.random();
  //   }

  //   return rand / 500;
  // };

  // x1.push(gaussianRand() + 1);
  // x2.push(gaussianRand() + 1.1);

  const chart = histogram(
    <Plot
      layout={layout({
        title: "Histogram Chart",
      })}
      data={[
        {
          x: x1,
          type: "histogram",
          opacity: 0.5,
          marker: {
            color: "green",
          },
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
        {
          x: x2,
          type: "histogram",
          opacity: 0.6,
          marker: {
            color: "red",
          },
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

  return <div id="chart">{chart}</div>;
};

export default HistogramPlotly;
