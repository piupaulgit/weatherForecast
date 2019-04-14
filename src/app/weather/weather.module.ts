import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherResultComponent } from "./weather-result/weather-result.component";
import { WeatherInputComponent } from "./weather-input/weather-input.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

@NgModule({
  declarations: [WeatherResultComponent, WeatherInputComponent],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [WeatherInputComponent, WeatherResultComponent]
})
export class WeatherModule {}
