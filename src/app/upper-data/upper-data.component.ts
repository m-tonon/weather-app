import { Component, OnInit, Output } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import {AppComponent} from '../app.component';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css']
})
export class UpperDataComponent implements OnInit {
  weatherData?: WeatherData = this.appComponent.weatherData

  constructor (private appComponent: AppComponent) {

  }

  ngOnInit(): void {

  }
}
