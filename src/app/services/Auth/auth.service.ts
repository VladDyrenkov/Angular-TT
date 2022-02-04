import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, map,  } from 'rxjs/operators'
import { User } from 'src/app/models/users.interface';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'src/environments/environment';
import { logOutAction } from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';



const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users: User[] = [];
  public usersList: Subject<any> = new BehaviorSubject({});

  constructor( private http: HttpClient, private store: Store<AppState> ) {
    this.usersList.next(this.users);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {

    }
    return  !jwtHelper.isTokenExpired(token || '');
  }

  checkUser(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${environment.apiUrl}/users?email=${email}&password=${password}`).pipe(first(), map((user: User[]) => user[0]));
  }

  getUserByToken(token: string): Observable<User> {
    return this.http.get<User[]>(`${environment.apiUrl}/users?token=${token}`).pipe(first(), map((user: User[]) => user[0]));
  }
  
  checkEmail(email: string): Observable<User> {
    return this.http.get<User[]>(`${environment.apiUrl}/users?email=${email}`).pipe(first(),map((user: User[]) => user && user[0]));
  }

  logOut(): void {
    this.store.dispatch(logOutAction());
    localStorage.removeItem('token');
  }

  registrationNewUser(email: string, password: string): Observable<User> {
    const userToAdd: User = {
      email: email,
      password: password,
      id: uuidv4(),
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOjE2NDMyMDEwMTUsImV4cCI6MTY3NDczNzAxNiwiYXVkIjoiIiwic3ViIjoiIiwibG9naW4iOiJsb2dpbkBsb2dpbi5sb2dpbiIsInBhc3N3b3JkIjoicGFzc3dvcmQifQ.HqfPuHXXA46af97JU0bARG63mHpFK2Q__1ABvLLMkwU"
    }
    return this.http.post<User>(`${environment.apiUrl}/users`,userToAdd);
  }  
}
