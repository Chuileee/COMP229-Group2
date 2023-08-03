import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  cancel() {
    // Navigate back to the ProfileComponent
    this.router.navigate(['/profile']);
  }

}
