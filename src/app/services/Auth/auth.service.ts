import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators'
import { User } from 'src/app/models/users.interface';
import { UserInfo } from './auth/user.info.interface';

const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users: User[] = [];
  private uploadingUsers$: Observable<User> = this.http.get<User>('http://localhost:3000/users').pipe(first());
  public usersList: Subject<any> = new BehaviorSubject({});

  constructor( private http: HttpClient, private router: Router,) {
    this.uploadingUsers$.subscribe((user: User) => {
      this.users = JSON.parse(JSON.stringify(user));
    });
    this.usersList.next(this.users);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return  !jwtHelper.isTokenExpired(token || '');
  }

  checkUser(userInfo: UserInfo){
    this.users.map((user: User) => {
      if (user.login === userInfo.login && user.password === userInfo.password) {
        localStorage.setItem('token', user.token);
        this.router.navigate(['/categories']);
      }
    });
  }

  getAuthStatus(){
    const token = localStorage.getItem('token');
    return  !jwtHelper.isTokenExpired(token || '');
  }
}
