import { Injectable} from '@angular/core';
import { Dish } from '../../models/dish.interface';
import { HttpClient } from '@angular/common/http';
import { first, pipe, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  public sendDish$: Subject<Dish[]> = new Subject();

  public dishes: Dish[] = [];

  constructor(private http: HttpClient) {
  }

  public loadDishes(): void {
    this.http.get<Dish[]>('http://localhost:3000/dish')
      .pipe(first())
      .subscribe((data:Dish[]) => {
        console.log(data);
        this.dishes=[...data];
        this.sendDish$.next(this.dishes);
      });
  }
}
