import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherResultComponent } from "./weather-result/weather-result.component";
import { WeatherInputComponent } from "./weather-input/weather-input.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { TempConverterPipe } from "../pipes/temp-converter.pipe";

@NgModule({
  declarations: [
    WeatherResultComponent,
    WeatherInputComponent,
    TempConverterPipe
  ],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [WeatherInputComponent, WeatherResultComponent]
})
export class WeatherModule {}
