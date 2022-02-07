import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from 'src/app/models/ingregient.interface';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  public ingridientsFeomDb$: Subject <Ingredient[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public upLoadIngredients(): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${environment.apiUrl}/ingredients`);
  }
}
