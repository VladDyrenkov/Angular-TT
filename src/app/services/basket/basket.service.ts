import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Subject } from 'rxjs';
import { ExtendedDish } from '../dish/dish'

export interface Data {
  sum: number,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  sendPrice$: Subject<any> = new Subject();
  sendDish$: Subject<any> = new BehaviorSubject([]);
  valueOfSelectedDish:number = 0;
  sumOfPrice: number = 0;
  private selectedDishes: ExtendedDish[] = [];

  public calcTotalPriceSubject = new BehaviorSubject<Data[]>([]);

  constructor() {
  }

  public recalcTotalPrice(){
    this.valueOfSelectedDish = 0;
    this.sumOfPrice = 0;
    console.log(this.selectedDishes)
    this.selectedDishes.map((dish:ExtendedDish) => {
      if(dish.count){
        const valueForAdd: number = parseFloat((parseFloat(dish.price)* dish.count).toFixed(2));
        this.sumOfPrice += valueForAdd;
        console.log(this.sumOfPrice);
        
        this.valueOfSelectedDish += dish.count;
      }
    });
    this.calcTotalPrice(this.selectedDishes);
  }

  private calcTotalPrice(selectedDishes:ExtendedDish[]): void {
    this.sendPrice$.next({
      sum: this.sumOfPrice.toFixed(2),
      value: this.valueOfSelectedDish
    });
    console.log(selectedDishes);
    
    this.sendDish$.next(selectedDishes);
  }
  
  public saveDish(dish: ExtendedDish){
    const newDish: ExtendedDish = JSON.parse(JSON.stringify(dish))
    if(!this.selectedDishes.find((item:ExtendedDish) => item.id === newDish.id)){
      this.selectedDishes.push(newDish);
    } else {
      this.selectedDishes.map((item:ExtendedDish) => {
        if(item.id === newDish.id) {
          if(item.count && newDish.count) {
            item.count += newDish.count;
          }
        }
      })
    }

    this.valueOfSelectedDish = 0;
    this.sumOfPrice = 0;
    console.log(this.selectedDishes)
    this.selectedDishes.map((dish:ExtendedDish) => {
      if(dish.count){
        const valueForAdd: number = parseFloat((parseFloat(dish.price)* dish.count).toFixed(2));
        this.sumOfPrice += valueForAdd;
        console.log(this.sumOfPrice);
        
        this.valueOfSelectedDish += dish.count;
      }
    });

    this.calcTotalPrice(this.selectedDishes);
  }

  public deleteFromOrder(id: string) {
    const index = this.selectedDishes.findIndex((dish: ExtendedDish) => dish.id === id)

    console.log(id);
    this.selectedDishes.splice(index, 1);
    this.recalcTotalPrice();
  }
}
