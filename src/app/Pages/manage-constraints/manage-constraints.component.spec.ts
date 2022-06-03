import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConstraintsComponent } from './manage-constraints.component';

describe('ManageConstraintsComponent', () => {
  let component: ManageConstraintsComponent;
  let fixture: ComponentFixture<ManageConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageConstraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
