import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category.interface';
import { Dish } from 'src/app/models/dish.interface';
import { DishesService } from 'src/app/services/dish/dishes.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { uploadingDish } from 'src/app/store/actions/dish.loading.actions';
import { uploadingCategory } from 'src/app/store/actions/category.uploading.actions';
import { filteredDish } from 'src/app/store/selectors/filtred.dish.uploading';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy{
  public categories: Category[] = [];
  public dishes: Dish[] = [];
  public categoryUrl!: string;
  public filtredDishes: Dish[] = [];
  public subscription!: Subscription;
  private subscriptionRout: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private categoryService: CategoryService,
    private store: Store<AppState>
    ) {
      this.subscriptionRout = route.params.subscribe((param) =>{
        this.categoryUrl = param['catUrl']
        this.fileredDish();
      })
  }

  ngOnInit() {
    this.store.dispatch(uploadingDish())
    this.store.dispatch(uploadingCategory());
    this.subscription = forkJoin([
      this.categoryService.loadCategories(),
      this.dishesService.loadDishes()
    ]).subscribe(([categories, dish]) => {
      this.categories = [...categories];
      this.dishes = [...dish];
      this.fileredDish();
    });

    this.categoryUrl= this.route.snapshot.params['catUrl'];
    this.fileredDish();
  }

  ngOnDestroy(): void {
      this.subscriptionRout.unsubscribe();
  }

  private fileredDish(): void {
    this.store.pipe(select(filteredDish, this.categoryUrl)).subscribe((data: Dish[]) => this.filtredDishes = data)
  }
}

