import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //loggedIn: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    //this.loggedIn = this.authService.isUserLoggedIn();
  }

}
