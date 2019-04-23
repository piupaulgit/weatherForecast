import { Component, OnInit, Input } from "@angular/core";
import { map, tap, filter, scan, retry, catchError } from "rxjs/operators";
import * as Highcharts from "highcharts";
import { ApiService } from "../../services/api.service";

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
  weather: any = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  dates = [];
  temp = [];
  humidity = [];
  windSpeed = [];

  options: any = {
    chart: {
      type: "spline",
      height: 400
    },
    title: {
      text: "Next five days weather forecast"
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
      categories: []
    },
    yAxis: [
      {
        // Primary yAxis
        labels: {
          formatter: function() {
            return this.value + " °C";
          },
          style: {
            color: "#f14143"
          }
        },
        title: {
          text: "temperature",
          style: {
            color: "#f14143"
          }
        },
        opposite: false,
        showEmpty: false
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: "humidity",
          style: {
            color: "#4572A7"
          }
        },
        labels: {
          formatter: function() {
            return this.value + " %";
          },
          style: {
            color: "#4572A7"
          }
        },
        showEmpty: false
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: "wind speed",
          style: {
            color: "#AA4643"
          }
        },
        labels: {
          formatter: function() {
            return this.value + " m/h";
          },
          style: {
            color: "#AA4643"
          }
        },
        opposite: false,
        showEmpty: false
      }
    ],
    tooltip: {
      formatter: function() {
        var unit = {
          temperature: "°C",
          humidity: "%",
          "wind speed": "m/h"
        }[this.series.name];

        return "" + this.x + ": " + this.y + " " + unit;
      }
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
        name: "temperature",
        data: [],
        type: "spline",

        color: "#f14143"
      },
      {
        name: "humidity",
        data: [],
        yAxis: 1,
        color: "#4572A7"
      },
      {
        name: "wind speed",
        data: [],
        yAxis: 2,
        color: "#AA4643"
      }
    ]
  };

  ngOnInit() {
    this.apiService.updatedWeatherData.subscribe(data => {
      data.map(item => {
        this.dates.push(item["date"].toString().split(" ")[0]);
        this.temp.push(item["temp"]);
        this.humidity.push(item["humidity"]);
        this.windSpeed.push(item["wind_speed"]);
      });

      this.options.xAxis["categories"] = this.dates;
      this.options.series[0]["data"] = this.temp;
      this.options.series[1]["data"] = this.humidity;
      this.options.series[2]["data"] = this.windSpeed;

      this.dates = [];
      this.temp = [];
      this.humidity = [];
      this.windSpeed = [];

      Highcharts.chart("container", this.options);
    });
  }
}
