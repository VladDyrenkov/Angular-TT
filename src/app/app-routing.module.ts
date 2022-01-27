import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './bloks/admin-page/admin-page.component';
import { AuthGuard } from './services/Auth/auth.guard';
import { AuthModule } from './services/Auth/auth.module';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./bloks/main/category/category.module').then((m) => m.CategoryModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // children: [
    //   {path: }
    // ] 
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'auth',
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
