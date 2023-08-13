import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Adjust the path as per your directory structure

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username : string="";
  email : string="";
  password : string="";
  
  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}


  ngOnInit() : void{

  }
  register(){
    let bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password,
    };
    
    this.http.post("http://localhost:4000/signup", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData && resultData.status) { 
        localStorage.setItem('userEmail', this.email);
        // Check for success (adjust condition based on your API's response structure)
        this.authService.login(resultData.userId, resultData.username);
        this.router.navigate(['/profile']);  // Navigate to homepage/dashboard after successful registration
      }
      alert(resultData.message || "User has been registered successfully.");  // Adjust the message based on your API's response structure
    }, 
    error => {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    });
  }
  
}
