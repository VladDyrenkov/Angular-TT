import { Component, Input, ViewChild } from '@angular/core';
import { Dish } from 'src/app/models/dish.interface';
import { DialogSelectedDishComponent } from '../dialog-selected-dish/dialog-selected-dish.component';


@Component({
  selector: 'app-category-dishes',
  templateUrl: './category-dishes.component.html',
  styleUrls: ['./category-dishes.component.scss']
})
export class CategoryDishesComponent {

  @Input() dishes: Dish[] = [];
  @ViewChild('dishDialog', { static: false }) dialog!: DialogSelectedDishComponent;

  public selectedDish: Dish | undefined;

  constructor() {
  }

  public selectDish(dish: Dish): void {
    this.selectedDish = dish;
    this.dialog.showDialog();
  }
}
