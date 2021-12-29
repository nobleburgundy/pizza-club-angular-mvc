import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './club-list-page.component.html',
  styleUrls: ['./club-list-page.component.css'],
})
export class ClubListPageComponent implements OnInit {
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
