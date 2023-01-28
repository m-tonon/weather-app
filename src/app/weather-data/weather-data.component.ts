import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Maringa';

  constructor (private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }
}
