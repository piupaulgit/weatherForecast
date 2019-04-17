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

  constructor(private apiService: ApiService) {
    this.apiService.updatedWeatherData.subscribe(data => {
      this.weather = data;
      console.log(this.weather);
    });
  }

  dates;

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
      // categories: this.date
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
        name: "temp",
        data: [3, 4, 3, 5, 4, 10, 12]
      }
    ]
  };

  ngOnInit() {
    Highcharts.chart("container", this.options);
    // this.apiService.updatedWeatherData.subscribe(data => (this.weather = data));
    console.log(this.weather);
    // this.apiService.updatedWeatherData.pipe();
  }
}
