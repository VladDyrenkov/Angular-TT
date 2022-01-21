import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
export class CategoryComponent implements OnInit, DoCheck {
  public categories: Category[] = [];
  public dishes: Dish[] = [];
  private catUrl!: string;
  public filtredDishes: Dish[] = [];
  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.loadCategories();
    this.subscription = this.categoryService.uploadingCategories$.subscribe((categories) => {
      this.categories = categories;
    });

    this.catUrl= this.route.snapshot.params['catUrl'];

    this.subscription = this.dishesService.sendDish$.subscribe((dishes) => {
      this.dishes = dishes;
      console.log(dishes);
      
    });

    this.dishesService.loadDishes();

    this.fileredDish();

  }
  
  ngDoCheck(){
    this.catUrl= this.route.snapshot.params['catUrl'];
    this.fileredDish();
  }

  private fileredDish(): void{
    let idForFilter: string = '';
      this.categories.map((category: Category) => {
        if (category.name === this.catUrl) {
          idForFilter = category.id;
        }  
      })
      console.log(idForFilter);
    this.filtredDishes = this.dishes.filter((dish) => dish.category.includes(idForFilter));
    console.log(this.filtredDishes);
  }
}
