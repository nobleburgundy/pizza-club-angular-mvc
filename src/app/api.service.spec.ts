import { inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service).toBeTruthy();
    }
  ));

  it('getPizzas should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getPizzas()).toBeTruthy();
    }
  ));

  it('getPizza(id) should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getPizza('testID')).toBeTruthy();
    }
  ));

  it('getRestaurants should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getRestaurants()).toBeTruthy();
    }
  ));

  it('getRestaurant(id) should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getRestaurant('testId')).toBeTruthy();
    }
  ));

  it('getClubs should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getClubs()).toBeTruthy();
    }
  ));

  it('getClub(id) should work', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      expect(service.getClub('testId')).toBeTruthy();
    }
  ));
});
