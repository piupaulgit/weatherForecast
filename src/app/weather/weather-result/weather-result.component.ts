import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Weather } from "../../interfaces/weather.model";

@Component({
  selector: "app-weather-result",
  templateUrl: "./weather-result.component.html",
  styleUrls: ["./weather-result.component.scss"]
})
export class WeatherResultComponent implements OnInit {
  public lat;
  public lng;

  weatherData;
  weather: Weather[] = [];
  data: string;

  unitMetric: true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getLocation();
    this.apiService.updatedWeatherData.subscribe(
      data => (this.weatherData = data)
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.apiService.getData(this.lat, this.lng).subscribe(data => {
              for (var i = 0; i < data.list.length; i = i + 8) {
                const forecastWeather = new Weather(
                  data.city.name,
                  data.list[i].dt_txt,
                  data.list[i].weather[0].description,
                  data.list[i].weather[0].icon,
                  data.list[i].main.temp,
                  data.list[i].main.temp_max,
                  data.list[i].main.temp_min,
                  data.list[i].main.humidity,
                  data.list[i].wind.speed
                );
                this.weather.push(forecastWeather);
              }
              this.apiService.updateWeatherData(this.weather);
            });
          }
        },
        (error: PositionError) => console.log(error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
