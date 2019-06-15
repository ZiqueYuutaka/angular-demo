import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.authService.logout();
  }

}
