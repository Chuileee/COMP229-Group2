import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLogin: boolean = false;

  // Store the user data (adjust the type if necessary)
  private currentUser: { email: string, username: string } | null = null;

  constructor(private router: Router) {}

  login(email: string, username: string): void {
    this.isLogin = true;
    this.currentUser = { email: email, username: username };
  }

  logout(): void {
    this.isLogin = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isLogin;
  }

  getUsername(): string | null {
    return this.currentUser?.username || null;
  }
  getEmail(): string | null {
    return this.currentUser?.email || null;
  }
}
