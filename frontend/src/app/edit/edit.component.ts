import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

const apiUrl = 'http://localhost:4000'; // Replace with your actual backend URL
const updateProfileEndpoint = '/update-profile'; // Replace with your actual update profile endpoint

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  username : string="";
  email : string="";
  password : string="";

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  cancel() {
    // Navigate back to the ProfileComponent
    this.router.navigate(['/profile']);
  }

  submitForm() {
    const updatedProfile = {
      username: this.username,
      email: this.email
    };

    this.http.put<any>(`${apiUrl}${updateProfileEndpoint}`, updatedProfile)
    .subscribe(
      response => {
        // Handle success
        console.log('Profile updated successfully:', response);

        // Update the user data in the AuthService
        this.authService.updateUserProfile(response.username, response.email);

        // Navigate back to the profile page
        this.router.navigate(['/profile']);
      },
      error => {
        // Handle error
        console.error('Profile update failed:', error);
      }
    );
}
}
