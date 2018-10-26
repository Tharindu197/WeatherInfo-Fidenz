import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  public server = 'http://api.openweathermap.org/';
  public apiUrl = 'data/2.5/weather?units=metric&appid=';
  public apiKey = '9a65d50b7e563dbdb590192df2036d11';
  public cityId = '&id=';
  public serverWithApiUrl = this.server + this.apiUrl +this.apiKey + this.cityId;
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param cityId
   */
  public getWeather(cityId: any) {
    return this.http.get(this.serverWithApiUrl + cityId);
  }
}
