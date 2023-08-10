import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Survey Creator';
  
  // Add this line for isLoggedIn property:
  isLoggedIn = false; // Initially set to false; change it based on your authentication logic
}

