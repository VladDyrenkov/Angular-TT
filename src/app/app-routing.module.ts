import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from 'src/app/pages/admin/admin-page.component';
import { AuthGuard } from './services/Auth/auth.guard';
import { AuthModule } from './services/Auth/auth.module';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('src/app/pages/content/main/category/category.module').then((m) => m.CategoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./services/Auth/auth.module').then((module) => module.AuthModule),
  },
  { 
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
