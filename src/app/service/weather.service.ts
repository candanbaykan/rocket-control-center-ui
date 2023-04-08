import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeatherModel} from "../model/WeatherModel";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private endpoint = `${environment.apiUrl}/weather`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': environment.apiKey
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getWeather() {
    return this.httpClient.get<WeatherModel>(this.endpoint, this.httpOptions);
  }
}
