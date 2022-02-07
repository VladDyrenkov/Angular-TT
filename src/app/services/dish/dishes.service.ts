import { Injectable } from '@angular/core';
import { Dish } from '../../models/dish.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  constructor(private http: HttpClient) {
  }

  public loadDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${environment.apiUrl}/dish`);
  }
}
