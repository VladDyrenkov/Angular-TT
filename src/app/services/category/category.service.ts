import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public uploadingCategories$: Subject<Category[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public loadCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }
}
