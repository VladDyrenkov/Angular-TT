import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDishesComponent } from './category-dishes.component';

describe('CategoryDishesComponent', () => {
  let component: CategoryDishesComponent;
  let fixture: ComponentFixture<CategoryDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
