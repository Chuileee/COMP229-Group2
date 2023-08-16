import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLogin: boolean = false;

  // Store the user data (adjust the type if necessary)
  private currentUser: { email: string, username: string } | null = null;

  constructor(private router: Router) {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    if (email && username) {
      this.currentUser = { email: email, username: username };
      this.isLogin = true;
    }
  }
  

  login(email: string, username: string): void {
    this.isLogin = true;
    this.currentUser = { email: email, username: username };
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  }

  logout(): void {
    this.isLogin = false;
    this.currentUser = null;
    localStorage.removeItem('username');
    localStorage.removeItem('email');
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


updateUserProfile(username: string, email: string): void {
  if (this.currentUser) {
    this.currentUser.username = username;
    this.currentUser.email = email;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  }
}
}