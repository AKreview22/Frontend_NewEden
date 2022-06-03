import { TestBed } from '@angular/core/testing';

import { PricepredictionService } from './priceprediction.service';

describe('PricepredictionService', () => {
  let service: PricepredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricepredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
