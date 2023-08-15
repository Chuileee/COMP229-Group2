import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service'; 

const apiUrl = 'http://localhost:4000'; // Replace with your actual backend URL
const updateProfileEndpoint = '/update-profile'; // Replace with your actual update profile endpoint

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  username: string = "";
  email: string = "";

  constructor(
    private router: Router,
    private userService: UserService  // Replace HttpClient with UserService
  ) {}

  cancel() {
    this.router.navigate(['/profile']);
  }

  submitForm() {
    const updatedProfile = {
      username: this.username,
      email: this.email
    };

    this.userService.updateUserProfile(updatedProfile)
      .subscribe(
        response => {
          console.log('Profile updated successfully:', response);
          this.router.navigate(['/profile']);
          // Optional: Provide a success message to the user
          alert('Profile updated successfully!');
        },
        error => {
          console.error('Profile update failed:', error);
          // Optional: Provide an error message to the user
          alert('Failed to update profile. Please try again.');
        }
      );
  }
}
