import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-lower-data',
  templateUrl: './lower-data.component.html',
  styleUrls: ['./lower-data.component.css']
})
export class LowerDataComponent implements OnInit {
  weatherData?: WeatherData = this.appComponent.weatherData

  constructor (private appComponent: AppComponent) {

  }

  ngOnInit(): void {

  }
}
