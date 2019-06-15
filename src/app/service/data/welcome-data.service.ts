import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //call rest api service
  getHello() {
    console.log("===>>>Calling api backend from WelcomeDataService");
    return this.httpClient
      .get<HelloBean>('http://localhost:8080/api/hello-world-bean');
  }

  getHelloWithPathVar(param) {
    console.log("===>>>Calling api backend from WelcomeDataService");
    //let authString = this.createAuthHeader();
    //let header = new HttpHeaders({ Authorization: authString });
    return this.httpClient
      .get<HelloBean>(
        `http://localhost:8080/api/hello-world-bean/${param}`);
  }

  //FOR DEMO PURPOSES
  //MOVED IN TO HTTPINTERCEPTER SERVICE
  //createAuthHeader() {
  //  let username = 'user';
  //  let password = 'password';
  //  let basicHeaderString = 'Basic ' + window.btoa(username + ":" + password);
  //  return basicHeaderString;
  //}
}

//Structure of the response
export class HelloBean {
  constructor(public message: string) { }
}
