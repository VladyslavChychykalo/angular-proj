import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = false;

  constructor(private router: Router) {}

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/']);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 0);
    });
  }
}
