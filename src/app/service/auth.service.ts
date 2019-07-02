import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSessionKey: string = 'authenticatedUser';
  private tokenKey: string = 'authToken';
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   *  authenticatedUser key is populated in the executeAuthService
   *  method if a successful call is made. This method is then
   *  used to determine if a user of the page can navigate
   *  to another page. Example: login -> welcome
   * */
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.userSessionKey);
    console.log('user logged in: ' + !(user === null));
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(this.userSessionKey);
    
  }

  getAuthToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(this.tokenKey);
    }

  }

  logout() {
    sessionStorage.removeItem(this.userSessionKey);
    sessionStorage.removeItem(this.tokenKey);
  }

  executeAuthService(username, password) {
    console.log("===>>>executing authentication in auth.service");
    let authString = this.createAuthHeader(username, password);
    let header = new HttpHeaders({ Authorization: authString });
    return this.httpClient
      .get<AuthBean>(
        `${API_URL}/api/auth`, { headers: header })
      .pipe(
        map(
          response => {
            //sessionStorage used to see if user is logged in
            sessionStorage.setItem(this.userSessionKey, username);
            sessionStorage.setItem(this.tokenKey, authString);
            return response;
          }
        )
      );
  }

  //FOR DEMO PURPOSES
  //Should be resolved with http-interceptors createAuthHeader method
  createAuthHeader(username, password) {
    let basicHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicHeaderString;
  }

  
}

export class AuthBean {
  constructor(public message: String) { }
}
