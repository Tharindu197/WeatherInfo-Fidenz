import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service';
import { OpenWeatherService } from '../services/open-weather.service';
import {City} from '../models/city';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  selectedCity = new City();
  cities = new Array<City>(); //city code, name holder
  loadedCities = new Array<City>(); //cities loaded with weather data

  constructor(  private jsonReaderService : JsonReaderService, private openWeatherService : OpenWeatherService
  ) {  }

  loadCitiesFromJsonFile(){
    this.cities.length = 0; //clear
    this.jsonReaderService.getJSON().subscribe(data => {
      //loading json data into array
     Object.keys(data).forEach( key => {
      this.cities = data[key];
      this.getSelectedCityWeather(this.cities[0]);
   });
   this.feedCitiesWithWeatherData(); //feed cities with weather data
  });
  }
  
  ngOnInit() {
    this.loadCitiesFromJsonFile(); //read json file
  }

  refreshAll(){
    this.getSelectedCityWeather(this.selectedCity);
    this.feedCitiesWithWeatherData();
  }
  feedCitiesWithWeatherData(){
    this.loadedCities.length = 0;
    this.cities.forEach(city => {
      console.log(city.CityName);
      this.loadedCities.push(this.loadWeather(city));
    });
  console.log('cccc', this.loadedCities);
  }

  getSelectedCityWeather(city){
    this.selectedCity = this.loadWeather(city);
  }

  loadWeather(inputCity){
    let city = new City();
    this.openWeatherService.getWeather(inputCity.CityCode).subscribe(data => {
      Object.keys(data).forEach( key => {
        city.temp = data["main"]["temp"];
        city.desc = data["weather"][0]["description"];
        city.CityCode = data["id"];
        city.CityName = data["name"];
    });
    });
    return city;
  }
}
