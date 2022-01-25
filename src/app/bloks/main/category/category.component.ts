import { Component, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { filter, forkJoin } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from '../../../models/category.interface';
import { Dish } from '../../../models/dish.interface';
import { DishesService } from '../../../services/dish/dishes.service'

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
    ) {
      this.subscriptionRout = route.params.subscribe((param) =>{
        this.categoryUrl = param['catUrl']
        this.fileredDish();
      })
  }

  ngOnInit() {
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
    const idForFilter = this.categories.find((category: Category) => category.url === this.categoryUrl)?.id || '';
    this.filtredDishes = this.dishes.filter((dish) => dish.category.includes(idForFilter));
  }
}

