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

  dates: [] = [];
  temp: [] = [];

  options: any = {
    chart: {
      type: "spline"
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
      categories: []
    },
    yAxis: {
      title: {
        text: "Fruit units"
      },
      labels: {
        formatter: function() {
          return this.value + " deg";
        }
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: " Deg celsius"
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
        name: "temp",
        data: []
      }
    ]
  };

  ngOnInit() {
    this.apiService.updatedWeatherData.subscribe(data => {
      data.map(item => {
        this.dates.push(item.date);
        this.temp.push(item.temp);
      });

      this.options.xAxis["categories"] = this.dates;
      this.options.series[0]["data"] = this.temp;

      this.dates = [];
      this.temp = [];

      Highcharts.chart("container", this.options);
    });
  }
}
