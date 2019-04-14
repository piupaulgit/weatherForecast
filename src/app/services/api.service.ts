import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiKey: string = "&APPID=5eae30c9f83ee5318bb870a2cf5db8ab";
  base_url: string = "http://api.openweathermap.org/data/2.5/forecast?";

  // behaviour subject
  private weatherDataSource = new BehaviorSubject<any>("loading");
  updatedWeatherData = this.weatherDataSource.asObservable();

  constructor(private http: HttpClient) {}

  getData(paramtr1?, paramtr2?) {
    if (paramtr2 == "city") {
      // with city name
      return this.http.get(`${this.base_url}q=${paramtr1}${this.apiKey}`);
    } else {
      // with lat lng
      return this.http.get(
        `${this.base_url}lat=${paramtr1}&lon=${paramtr2}${this.apiKey}`
      );
    }
  }

  updateWeatherData(weatherData) {
    this.weatherDataSource.next(weatherData);
  }
}
