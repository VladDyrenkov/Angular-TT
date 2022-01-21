import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDishesComponent } from './bloks/main/category-dishes/category-dishes.component';
import { CategoryComponent } from './bloks/main/category/category.component';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./bloks/main/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
