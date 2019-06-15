import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {
    
  constructor(
    private authService: AuthService
  ) { }

  /**
   * Wrapped around any HttpRequest that calls an
   * endpoint in the backend
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //let headerStr = this.createAuthHeader();
    let headerStr = this.authService.getAuthToken();
    let authUser = this.authService.getAuthenticatedUser();
    console.log('intercepting request for user ' +
      this.authService.getAuthenticatedUser()
    );

    //Allow only if authenticated
    if (headerStr && authUser) {
      request = request.clone({
        setHeaders: {
          Authorization: headerStr
        }
      })
    }

    return next.handle(request);
  }

  //FOR DEMO PURPOSES
  createAuthHeader() {
    let username = 'user';
    let password = 'password';
    let basicHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicHeaderString;
  }

}
