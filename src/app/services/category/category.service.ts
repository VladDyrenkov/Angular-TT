import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public uploadingCategories$: Subject<Category[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public loadCategories(): void {
    this.http.get<Category[]>('http://localhost:3000/category')
      .pipe(first())
      .subscribe((data:Category[]) => {
        console.log(data);
        this.uploadingCategories$.next(data);
      });
  }
}
