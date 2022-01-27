import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component'
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
  }
];


@NgModule({
  declarations: [AuthComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
})

export class AuthModule { }
