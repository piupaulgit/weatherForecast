import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherResultComponent } from "./weather-result/weather-result.component";
import { WeatherInputComponent } from "./weather-input/weather-input.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { TempConverterPipe } from "../pipes/temp-converter.pipe";
import { WeatherChartComponent } from "./weather-chart/weather-chart.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ExtractDatePipe } from "../pipes/extract-date.pipe";
import { TabsComponent } from "./tabs/tabs.component";
import { TabComponent } from "./tabs/tab.component";

@NgModule({
  declarations: [
    WeatherResultComponent,
    WeatherInputComponent,
    TempConverterPipe,
    WeatherChartComponent,
    ExtractDatePipe,
    TabsComponent,
    TabComponent
  ],
  imports: [CommonModule, AutocompleteLibModule, FlexLayoutModule],
  exports: [
    WeatherInputComponent,
    WeatherResultComponent,
    WeatherChartComponent,
    ExtractDatePipe
  ]
})
export class WeatherModule {}
