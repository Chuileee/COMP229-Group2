import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const updateProfileEndpoint = '/update-profile';

interface UserProfile {
  username: string;
  email: string;
  password?: string; // Optional password
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:4000';  // Base URL for your backend

  constructor(private http: HttpClient) {}

  fetchUserProfile(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/profile`, { email: email });
  }

  updateUserProfile(profile: { username: string, email: string, password?: string }): Observable<any> {

    return this.http.put(`${this.baseUrl}${updateProfileEndpoint}`, profile);
  }
}
