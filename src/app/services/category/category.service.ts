import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public uploadingCategories$: Subject<Category[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public loadCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/category`);
  };
}
