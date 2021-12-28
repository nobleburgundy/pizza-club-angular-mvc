import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css'],
})
export class ClubPageComponent implements OnInit {
  public clubs;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs() {
    this.apiService.getClubs().subscribe(
      (data) => {
        this.clubs = data;
        console.log('club data', this.clubs);
      },
      (err) => console.log('Error: ', err),
      () => console.log('DONE loading clubs')
    );
  }
}
