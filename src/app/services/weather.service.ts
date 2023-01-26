import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData (cityName: string): Observable<WeatherData> {
      return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
        params: new HttpParams()
          .set('key', environment.weatherKey)
          .set('q', cityName)
        })

  }
}
