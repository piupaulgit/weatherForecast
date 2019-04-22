import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError as observableThrowError, BehaviorSubject } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiKey: string = "&APPID=5eae30c9f83ee5318bb870a2cf5db8ab";
  base_url: string = "http://api.openweathermap.org/data/2.5/forecast?";
  unit: string = "&units=metric";
  fullUrl: string;

  // behaviour subject
  private weatherDataSource = new BehaviorSubject<any>([]);
  updatedWeatherData = this.weatherDataSource.asObservable();

  constructor(private http: HttpClient) {}

  getData(paramtr1?, paramtr2?) {
    if (paramtr2 == "city") {
      // with city name
      this.fullUrl = `${this.base_url}q=${paramtr1}${this.apiKey}${this.unit}`;
    } else {
      // with lat lng
      this.fullUrl = `${this.base_url}lat=${paramtr1}&lon=${paramtr2}${
        this.apiKey
      }${this.unit}`;
    }

    return this.http.get(this.fullUrl).pipe(catchError(this.errorHandler));
  }

  updateWeatherData(weatherData) {
    this.weatherDataSource.next(weatherData);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error.error.message);
    return observableThrowError(error);
  }
}
