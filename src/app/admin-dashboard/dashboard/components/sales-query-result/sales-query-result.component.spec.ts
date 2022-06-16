import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQueryResultComponent } from './sales-query-result.component';

describe('SalesQueryResultComponent', () => {
  let component: SalesQueryResultComponent;
  let fixture: ComponentFixture<SalesQueryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesQueryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesQueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
