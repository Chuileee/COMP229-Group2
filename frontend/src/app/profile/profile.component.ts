import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email: string="";
  password: string="";
  isLogin: boolean=true;
  errorMessage: string="";

  constructor(private router:Router, private http:HttpClient){}

  editProfile(){
    this.router.navigate(['/edit']);
    }

  createSurvey() {
    this.router.navigate(['/survey']);
  }

  logout(){
    this.router.navigate(['/login']);
  }
  }

