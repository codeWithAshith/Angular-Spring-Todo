import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    console.log();
    this.auth.getHelloFromSpring().subscribe({
      next: (result: any) => {
        console.log(result.msg);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  login() {
    if (
      this.username.length > 0 &&
      this.password.length > 0 &&
      this.auth.login(this.username, this.password)
    ) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.errorMessage = 'Invalid Credentails';
    }
  }
}
