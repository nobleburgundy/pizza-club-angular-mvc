import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001';
  constructor(private httpClient: HttpClient) {}

  public getPizzas() {
    return this.httpClient.get(this.apiUrl + '/api/pizzas');
  }

  public getRestaurants() {
    return this.httpClient.get(this.apiUrl + '/api/restaurants');
  }
}
