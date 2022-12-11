import { Time } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { Router } from '@angular/router';
import { PatientRegServiceService } from './services/patient-reg-service/patient-reg-service.service';
import { LoginServiceService } from './services/login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateToday = new Date();

  route(){
    if(this.login.counter==false){
      this.Router.navigate(['/patient-login'])
    }else{
      this.Router.navigate(['/deptlist'])
    }
  }
   constructor(private pl:PatientRegServiceService,private login:LoginServiceService,private Router:Router){ 
     
    }
    ngOnInit():void{

     }


}
