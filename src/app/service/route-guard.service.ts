import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: HardcodedAuthService,
              private router: Router) { }

  //handles security of links
  //implemented from CanActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
      
      //route user to login page
      this.router.navigate(['login']);
    return false;
  }
}
