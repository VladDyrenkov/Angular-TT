import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ExtendedDish } from '../dish/dish'
import { BasketTotal } from 'src/app/models/basket-data.interface';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  basketTotal$: Subject<any> = new BehaviorSubject({});
  dish$: Subject<any> = new BehaviorSubject([]);
  valueOfSelectedDish:number = 0;
  sumPriceOfOrder: number = 0;
  private selectedDishes: ExtendedDish[] = [];


  constructor() {
  }

  public recalcTotalPrice(): void {
    this.calcTotalPrice(this.selectedDishes);
  }

  private calcTotalPrice(selectedDishes: ExtendedDish[]): void {
    this.valueOfSelectedDish = 0;
    this.sumPriceOfOrder = 0;
    this.selectedDishes.map((dish: ExtendedDish) => {
      if(dish.count){
        const sumPriceOfDish: number = parseFloat((parseFloat(dish.price)* dish.count).toFixed(2));
        dish.totalPrice = sumPriceOfDish;
        this.sumPriceOfOrder += sumPriceOfDish;        
        this.valueOfSelectedDish += dish.count;
      }
    });
    this.basketTotal$.next({
      sum: this.sumPriceOfOrder.toFixed(2),
      value: this.valueOfSelectedDish
    });

    this.dish$.next(selectedDishes);
  };

  public saveDish(dish: ExtendedDish) {
    const newDish: ExtendedDish = dish? JSON.parse(JSON.stringify(dish)) : {};

    if(!this.selectedDishes.find((item: ExtendedDish) => item.id === newDish.id)) {
      this.selectedDishes.push(newDish);
    } else {
      this.selectedDishes.map((dishFromSelected: ExtendedDish) => {
        if(dishFromSelected.id === newDish.id) {
          dishFromSelected.count += newDish.count;
        }
      });
    };

    this.recalcTotalPrice();
  }

  public deleteFromOrder(id: string) {
    const index = this.selectedDishes.findIndex((dish: ExtendedDish) => dish.id === id);

    this.selectedDishes.splice(index, 1);
    this.recalcTotalPrice();
  }
}
