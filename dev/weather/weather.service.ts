import { Injectable } from "angular2/core";
import { WEATHER_ITEMS } from './weather.data';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Http } from 'angular2/http';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService {
    constructor(private _http: Http ){

    }
    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f8660f7a20d47be196059a62d92cf941&units=imperial`)
            .map(response => response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error.json());
            }) 
    }
}