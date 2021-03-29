import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePizzaFormComponent } from './create-pizza-form.component';

describe('CreatePizzaFormComponent', () => {
  let component: CreatePizzaFormComponent;
  let fixture: ComponentFixture<CreatePizzaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePizzaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePizzaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
