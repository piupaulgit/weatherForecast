import { Component, OnInit } from "@angular/core";
import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  weatherData;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    //  this.apiService.getData().subscribe(data =>{
    //   this.weatherData = data;
    //   console.log(this.weatherData)
    //  })
  }
}
