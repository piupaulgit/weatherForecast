import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: "app-weather-chart",
  templateUrl: "./weather-chart.component.html",
  styleUrls: ["./weather-chart.component.scss"]
})
export class WeatherChartComponent implements OnInit {
  constructor() {}

  public options: any = {
    chart: {
      type: "areaspline"
    },
    title: {
      text: "Average fruit consumption during one week"
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1
    },
    xAxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    },
    yAxis: {
      title: {
        text: "Fruit units"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: " units"
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [
      {
        name: "John",
        data: [3, 4, 3, 5, 4, 10, 12]
      },
      {
        name: "Jane",
        data: [1, 3, 4, 3, 3, 5, 4]
      }
    ]
  };

  ngOnInit() {
    Highcharts.chart("container", this.options);
  }
}
