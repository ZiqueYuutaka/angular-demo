import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      return this.httpClient.get<HelloBean>('http://localhost:8080/api/hello-world-bean');
  }
}

//Structure of the response
export class HelloBean{
    constructor(public message: string){}
}
