import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username.length > 0 && this.password.length > 0) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.errorMessage = 'Invalid Credentails';
    }
  }
}
