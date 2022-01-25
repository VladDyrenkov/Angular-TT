import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './services/Auth/auth/auth.module';

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
  {
    path: 'auth',
    loadChildren: () => import('./services/Auth/auth/auth.module').then((module) => module.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
