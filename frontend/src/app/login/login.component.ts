import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string="";
  password: string="";
  isLogin: boolean=true;
  errorMessage: string="";

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}

  login(){
    let bodyData={
      email: this.email,
      password: this.password
    };


    this.http.post('http://localhost:4000/login', bodyData).subscribe((resultData: any) => {
      if (resultData.status) {
        // Store user's email for further usage.
        localStorage.setItem('userEmail', resultData.email);
        this.authService.login(resultData.email, resultData.username);
        this.router.navigateByUrl('/profile');
      } else {
        alert('Incorrect Email or Password');
      }
    });
    }
  }

