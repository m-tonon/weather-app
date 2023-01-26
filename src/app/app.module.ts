import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowerDataComponent } from './lower-data/lower-data.component';
import { UpperDataComponent } from './upper-data/upper-data.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    LowerDataComponent,
    UpperDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
