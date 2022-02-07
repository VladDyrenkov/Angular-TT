import { NgModule } from '@angular/core';
import { AuthComponent } from 'src/app/pages/authenticate/auth/auth.component'
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from 'src/app/pages/authenticate/registration/registration.component';

const routes: Route[] = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
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
