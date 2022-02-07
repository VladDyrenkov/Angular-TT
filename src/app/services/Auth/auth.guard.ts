import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/users.interface';
import { userSaveAction } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>) { }

  canActivate(): boolean {

    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {      
      this.router.navigate(['/login']);
    }
    const token = localStorage.getItem('token');
    let activeUser: User;
    this.authService.getUserByToken(token || '').subscribe((data) => {
      activeUser = {...data};
      console.log(activeUser);
      this.store.dispatch(userSaveAction(activeUser))
    });

    return isAuthenticated;
  }
}
