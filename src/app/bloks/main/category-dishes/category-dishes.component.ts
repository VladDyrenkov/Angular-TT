import { Component, EventEmitter, OnInit, Input, OnDestroy } from '@angular/core';
import { BasketService } from '../../../services/basket/basket.service';
import { Dish } from 'src/app/models/dish.interface';
import { ExtendedDish } from 'src/app/services/dish/dish';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-category-dishes',
  templateUrl: './category-dishes.component.html',
  styleUrls: ['./category-dishes.component.scss']
})
export class CategoryDishesComponent {

  @Input() dishes: Dish[] = [];
  
  public displayStatus: boolean = false;
  public selectedDish: Dish | undefined;

  constructor() {
  }

  public selectDish(dish: Dish): void {
    this.selectedDish = dish;
    this.onPress();
  }

  public onPress(status: boolean = true): void {
    this.displayStatus = status;
  }

}
