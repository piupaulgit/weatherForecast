import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApiService } from "./services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { WeatherModule } from "./weather/weather.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [FlexLayoutModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
