import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(): boolean {

    const isAuthenticated = this.authService.getAuthStatus();

    if (!isAuthenticated) {
        this.router.navigate(['/auth']);
    }

    return isAuthenticated;
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean  {
    if (!this.authService.getAuthStatus()) {
      this.router.navigate(['/auth']);
    }

    return this.authService.getAuthStatus();
  }
}
