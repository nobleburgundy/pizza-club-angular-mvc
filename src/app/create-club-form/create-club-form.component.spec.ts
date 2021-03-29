import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClubFormComponent } from './create-club-form.component';

describe('CreateClubFormComponent', () => {
  let component: CreateClubFormComponent;
  let fixture: ComponentFixture<CreateClubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClubFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
