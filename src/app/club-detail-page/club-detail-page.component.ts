import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './club-detail-page.component.html',
  styleUrls: ['./club-detail-page.component.css'],
})
export class ClubDetailPageComponent implements OnInit {
  public club;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(`params.get(id) = '${params.get('id')}'`);
      this.club = this.apiService
        .getClub(params.get('id'))
        .subscribe((data) => (this.club = data));
      console.log('this.club', this.club);
    });
  }
}
