import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-lower-data',
  templateUrl: './lower-data.component.html',
  styleUrls: ['./lower-data.component.css']
})
export class LowerDataComponent implements OnInit {
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

  }


}
