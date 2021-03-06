import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CommonModule } from '@angular/common'
import { CategoryDishesComponent } from '../category-dishes/category-dishes.component';
import { DialogSelectedDishComponent } from '../dialog-selected-dish/dialog-selected-dish.component';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from 'src/app/pages/content/footer/footer/footer.component';
import { BasketComponent } from 'src/app/pages/content/footer/basket/basket.component';

const routes: Route[] = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: ':catUrl',
    component: CategoryComponent,
  },
];

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDishesComponent,
    DialogSelectedDishComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  providers: [],
})
export class CategoryModule { }
