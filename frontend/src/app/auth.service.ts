import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLogin: boolean = false;

  // Store the user data (adjust the type if necessary)
  private currentUser: { userId: string, username: string } | null = null;

  constructor(private router: Router) {}

  // Simulate a login by setting user data
  login(userId: string, username: string): void {
    this.isLogin = true;
    this.currentUser = { userId: userId, username: username };
  }

  logout(): void {
    this.isLogin = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }


  getUsername(): string | null {
    return this.currentUser?.username || null;
  }
}
