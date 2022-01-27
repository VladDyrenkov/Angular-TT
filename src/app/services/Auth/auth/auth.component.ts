import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserInfo } from './user.info.interface';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm!: FormGroup;
  userInfo!: UserInfo;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  }

  takeUserData(){
    this.userInfo = new UserInfo(this.loginForm.get('login')!.value, this.loginForm.get('password')!.value);
    this.loginForm.reset();
    this.authService.checkUser(this.userInfo);
  }
}
