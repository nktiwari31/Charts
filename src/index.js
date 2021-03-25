import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import Histogram from "./Components/ApexChart/Histogram";
import HeatMap from "./Components/ApexChart/Heatmap";
import HistogramPlotly from "./Components/PlotlyChart/Histogram";
import HeatMapPlotly from "./Components/PlotlyChart/Heatmap";

const routing = (
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={HistogramPlotly} />
      <Route path="/plotly-histogram" exact component={HistogramPlotly} />
      <Route path="/plotly-heatmap" exact component={HeatMapPlotly} />
      <Route path="/apex-histogram" exact component={Histogram} />
      <Route path="/apex-heatmap" exact component={HeatMap} />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
