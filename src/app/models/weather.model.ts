export interface WeatherData {
  location: Location
  current: Current
  forecast: Forecast
  day: Day
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Current {
  temp_c: number
  condition: Condition
  wind_kph: number
  humidity: number
  uv: number
}

export interface Condition {}

export interface Forecast {
  forecastday: Forecastday[]
}

export interface Forecastday {
  day: Day
  astro: Astro
  hour: Hour[]
}

export interface Day {
  maxtemp_c: number
  mintemp_c: number
  avgtemp_c: number
  maxwind_kph: number
  totalsnow_cm: number
  avgvis_km: number
  avghumidity: number
  condition: Condition2
}

export interface Condition2 {}

export interface Astro {}

export interface Hour {
  temp_c: number
  temp_f: number
  condition: Condition3
  wind_kph: number
  humidity: number
}

export interface Condition3 {}
