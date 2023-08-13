import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  username: string | null = null;

  ngOnInit() {
  this.username = this.authService.getUsername();
}

  constructor(public authService: AuthService) {}  // Made authService public for template access

  logout() {
    this.authService.logout(); // Assuming AuthService has a logout() method
  }
}
