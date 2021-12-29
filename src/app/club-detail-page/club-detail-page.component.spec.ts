import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetailPageComponent } from './club-detail-page.component';

describe('ClubDetailPageComponent', () => {
  let component: ClubDetailPageComponent;
  let fixture: ComponentFixture<ClubDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
