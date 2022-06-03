import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DounghtChartComponent } from './dounght-chart.component';

describe('DounghtChartComponent', () => {
  let component: DounghtChartComponent;
  let fixture: ComponentFixture<DounghtChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DounghtChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DounghtChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
