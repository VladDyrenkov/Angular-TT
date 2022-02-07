import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.interface';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { logInAction } from 'src/app/store/actions/auth.actions';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  public loginForm!: FormGroup;
  public loginStatus: boolean = true;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[ ///Email
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.minLength(8),
        Validators.required
      ])
    });
  };
  public get email() { return this.loginForm.get('email')};
  public get password() { return this.loginForm.get('password')};

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.logOut();
    } 
  }

  authProcess(): void {
    this.authService.checkUser(this.email!.value, this.password!.value).subscribe((user: User) => {
      if (user) {
        this.store.dispatch(logInAction({email: this.email?.value, password: this.password?.value}))
        this.loginStatus = true;
        localStorage.setItem('token', user.token)
        this.router.navigate(['/categories']);
        this.loginForm.reset();
      } else {
        this.loginStatus = false;
      }
    });  
  };

  registerRedirect() {
    this.router.navigate(['/registration']);
  };
};
