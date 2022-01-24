import { Injectable} from '@angular/core';
import { Dish } from '../../models/dish.interface';
import { HttpClient } from '@angular/common/http';
import { first, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  public dishFromDb$: Subject<Dish[]> = new Subject();

  public dishes: Dish[] = [];

  constructor(private http: HttpClient) {
  }

  public loadDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:3000/dish');
      // .pipe(first())
      // .subscribe((data:Dish[]) => {
      //   this.dishes=[...data];
      //   this.dishFromDb$.next(this.dishes);
      // });
  }
}
