import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizzas;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPizzas().subscribe((data) => {
      this.pizzas = data;
    });
  }
}
