import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
  
}
