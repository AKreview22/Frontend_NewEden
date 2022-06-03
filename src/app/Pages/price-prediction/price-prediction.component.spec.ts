import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePredictionComponent } from './price-prediction.component';

describe('PricePredictionComponent', () => {
  let component: PricePredictionComponent;
  let fixture: ComponentFixture<PricePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
