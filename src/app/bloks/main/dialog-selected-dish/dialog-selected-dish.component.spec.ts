import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectedDishComponent } from './dialog-selected-dish.component';

describe('DialogSelectedDishComponent', () => {
  let component: DialogSelectedDishComponent;
  let fixture: ComponentFixture<DialogSelectedDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectedDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectedDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
