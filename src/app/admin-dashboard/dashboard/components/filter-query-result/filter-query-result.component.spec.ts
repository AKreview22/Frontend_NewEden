import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterQueryResultComponent } from './filter-query-result.component';

describe('FilterQueryResultComponent', () => {
  let component: FilterQueryResultComponent;
  let fixture: ComponentFixture<FilterQueryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterQueryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterQueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
