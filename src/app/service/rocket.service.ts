import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RocketModel} from "../model/RocketModel";

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private endpoint = `${environment.apiUrl}/rockets`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': environment.apiKey
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<RocketModel[]>(this.endpoint, this.httpOptions);
  }

  launch(id?: string) {
    return this.httpClient.put<RocketModel>(
      `${environment.apiUrl}/rocket/${id}/status/launched`,
      null,
      this.httpOptions
    );
  }

  cancelLaunch(id?: string) {
    return this.httpClient.delete<RocketModel>(
      `${environment.apiUrl}/rocket/${id}/status/launched`,
      this.httpOptions
    );
  }
}
