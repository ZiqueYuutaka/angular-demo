import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password) {
    console.log("===>>>: authenticating " + username);
    //console.log(this.isUserLoggedIn());
    if (username === 'username' && password === 'dummy') {
      //use browser's session storage
      sessionStorage.setItem('authUser', username);
      //console.log(this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    return !(user === null)
  }
    
    logout(){
        sessionStorage.removeItem('authUser');
    }
}
