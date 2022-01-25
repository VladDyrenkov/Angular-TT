import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component'
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path:'*',
    component: AuthComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AuthModule {}
