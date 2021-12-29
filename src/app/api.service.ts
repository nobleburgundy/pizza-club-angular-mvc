import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/api';
  constructor(private httpClient: HttpClient) {}

  public getPizzas() {
    return this.httpClient.get(this.apiUrl + '/pizzas');
  }

  public getPizza(id) {
    return this.httpClient.get(this.apiUrl + `/pizzas/${id}`);
  }

  public addPizza(pizza) {
    return this.httpClient.post(this.apiUrl + '/pizzas', pizza);
  }

  public getRestaurants() {
    return this.httpClient.get(this.apiUrl + '/restaurants');
  }

  public getRestaurant(id) {
    return this.httpClient.get(this.apiUrl + `/restaurants/${id}`);
  }

  public getClubs() {
    return this.httpClient.get(this.apiUrl + '/clubs');
  }

  public getClub(id) {
    return this.httpClient.get(this.apiUrl + `/club/${id}`);
  }
}
