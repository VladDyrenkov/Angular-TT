import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
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
export class CategoryComponent implements DoCheck {
  public categories: Category[] = [];
  public dishes: Dish[] = [];
  public categoryUrl!: string;
  public filtredDishes: Dish[] = [];
  public subscription!: Subscription;
  public uploadingCategories$!: Observable<any>;
  public observable:Observable<any> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    // this.categoryService.loadCategories();
    // this.subscription = this.categoryService.uploadingCategories$.subscribe((categories) => {
    //   this.categories = categories;
    // });

    this.subscription = forkJoin([
      this.categoryService.loadCategories(),
      this.dishesService.loadDishes()
    ]).subscribe(([categories, dish]) => {
      this.categories = [...categories];
      this.dishes = [...dish];
    });
    
    this.uploadingCategories$ = this.categoryService.loadCategories();

    this.categoryUrl= this.route.snapshot.params['catUrl'];

    this.subscription = this.dishesService.dishFromDb$.subscribe((dishes) => {
      this.dishes = dishes;      
    });

    this.dishesService.loadDishes();

    this.fileredDish();

  }
  
  ngDoCheck(){
    this.categoryUrl= this.route.snapshot.params['catUrl'];    
    this.fileredDish();
  }

  private fileredDish(): void {
    let idForFilter: string = '';
      this.categories.map((category: Category) => {
        if (category.url === this.categoryUrl) {
          idForFilter = category.id;
        }  
      });
    console.log(this.categoryUrl);
      
    this.filtredDishes = this.dishes.filter((dish) => dish.category.includes(this.categoryUrl));
    // console.log(this.filtredDishes);
    
  }

  public setFilterUrl(categoryUrl: string){
    this.categoryUrl = categoryUrl;   
  }
}

