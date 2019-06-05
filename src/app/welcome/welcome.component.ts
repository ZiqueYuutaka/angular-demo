import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService} from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    
    name=''
    apiMessage='';

  constructor(private route: ActivatedRoute,
              private welcomeData: WelcomeDataService) { }

  ngOnInit() {
      console.log(this.route.snapshot.params['name']);
      this.name = this.route.snapshot.params['name'];
  }
    
    //Call api backend
    getWelcomeMessage(){
        console.log("===>>>getting welcome message");
        //console.log(this.welcomeData.getHello());
        this.welcomeData.getHello().subscribe(
            response => this.handleSuccessfulResponse(response),
            error => this.handleErrorResponse(error)
        );
        console.log('last line of welcomeMessage ');
    }
    
    getWelcomeMessageWithParam(){
        console.log("===>>>getting welcome message");
        //console.log(this.welcomeData.getHello());
        this.welcomeData.getHelloWithPathVar(this.name).subscribe(
            response => this.handleSuccessfulResponse(response),
            error => this.handleErrorResponse(error)
        );
        console.log('last line of welcomeMessage ');
    }
    
    handleSuccessfulResponse(response){
        console.log(response.message);
        this.apiMessage=response.message;
    }
    
    //shortcut version. must implement a front-end signifier of an error
    handleErrorResponse(error){
//        console.log(error);
//        console.log(error.error);
//        console.log(error.error.message);
        this.apiMessage = error.error.message;
    }

}
