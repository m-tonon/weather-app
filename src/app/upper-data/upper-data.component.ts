import { Component, OnInit, Output } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css']
})
export class UpperDataComponent  implements OnInit {
  @Output() weatherData?: WeatherData;

  ngOnInit(): void {
    
  }

}
