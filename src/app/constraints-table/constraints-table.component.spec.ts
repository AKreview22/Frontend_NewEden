import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintsTableComponent } from './constraints-table.component';

describe('ConstraintsTableComponent', () => {
  let component: ConstraintsTableComponent;
  let fixture: ComponentFixture<ConstraintsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstraintsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
