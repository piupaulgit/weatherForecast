import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherResultComponent } from "./weather-result/weather-result.component";
import { WeatherInputComponent } from "./weather-input/weather-input.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { TempConverterPipe } from "../pipes/temp-converter.pipe";
import { WeatherChartComponent } from "./weather-chart/weather-chart.component";
// import { TabsComponent } from "./tabs/tabs.component";

@NgModule({
  declarations: [
    WeatherResultComponent,
    WeatherInputComponent,
    TempConverterPipe,
    WeatherChartComponent
  ],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [
    WeatherInputComponent,
    WeatherResultComponent,
    WeatherChartComponent
  ]
})
export class WeatherModule {}
