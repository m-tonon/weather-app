import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Maringa';

  constructor(private weatherService: WeatherService) {}

  getCityName() {
    console.log('The city entered is --' + this.cityName);
    return this.cityName
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }


}
