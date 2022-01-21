import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CommonModule } from '@angular/common'
import { CategoryDishesComponent } from '../category-dishes/category-dishes.component';
import { DialogSelectedDishComponent } from '../dialog-selected-dish/dialog-selected-dish.component';
import { SharedModule } from '../../reusable_components/shared/shared.module';

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
    ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  providers: [],
})
export class CategoryModule { }
