import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // Add OnInit
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';



interface UserProfile {
  username?: string;
  email?: string;
  // exclude password and other sensitive info from this interface
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  userProfile: UserProfile = {};

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
      this.userService.fetchUserProfile(userEmail).subscribe(
        (data: any) => {
          if (data.status) {
            this.userProfile = data.user;
          }
        },
        error => {
          console.error('Error fetching profile:', error);
        }
      );
    }
  }


  editProfile() {
    this.router.navigate(['/edit']);
  }

  createSurvey() {
    this.router.navigate(['/survey']);
  }

  logout() {
    this.authService.logout();
  }
}