import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = 'Invalid Credentials';
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  //handleLogin() {
  //  console.log(this.username);
  //  if (this.authService.authenticate(this.username, this.password)) {
  //    this.router.navigate(['welcome', this.username]);
  //    this.invalidLogin = false;
  //  } else {
  //    this.invalidLogin = true;
  //  }
  //}

  handleAuthLogin() {
    console.log('===>>>Authenticating '+this.username);
    this.authService.executeAuthService(this.username, this.password)
      .subscribe(
        response => {
          console.log(response);
          console.log('navigating to welcome page');
          this.router.navigate(['welcome', this.username]);
          console.log('navigated to welcome page');
          this.invalidLogin = false;
        },
        error => {
          console.log('===>>>Authentication failed for '
            + this.username);
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
