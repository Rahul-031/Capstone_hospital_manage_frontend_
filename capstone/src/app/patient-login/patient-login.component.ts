import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patients,PatientRegServiceService } from '../services/patient-reg-service/patient-reg-service.service';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  a: number = 6
  b: String = ''
  minNumberofChars: number = 6;
  maxNumberofChars: number = 16;
  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  patient: patients[] =[]
  len:number = this.patient.length
  counter:number=0
  Log:boolean=this.log.counter
  
  
  
  

  login(form: NgForm) {

    // if(pass.length<this.a){
    //   console.log(form.value.pass)
    //   this.b ='password length sould be at least 6 characters'
    // }
    if (!(form.value.pass || form.value.user)) {
      alert('please provide valid username or password')

    }
    if ((form.value.pass.length < this.minNumberofChars || form.value.pass.length > this.maxNumberofChars) && (form.value.pass || form.value.user)) {
      this.b = 'password length must be between 6-16 characters'
      
      if (!this.regularExpression.test(form.value.pass)) {
        alert("password should contain atleast one number and one special character")
      }
    }

    if (form.value.pass.length > this.minNumberofChars && form.value.pass.length < this.maxNumberofChars && this.regularExpression.test(form.value.pass)) {

      for(var i of this.patient){
        
        if(i.email==form.value.user && i.pass==form.value.pass){
        console.log(i.email==form.value.user && i.pass==form.value.pass)
        this.router.navigate(['/deptlist'])
        this.log.counter=true
        console.log("lets go")
        break
        }
        
        if(this.patient.indexOf(i)==this.patient.length-1){
          console.log(this.patient.indexOf(i))
          console.log(i)
          alert("username or pass check karo")
        }
     }
    
    }
  }
  
  constructor(private httpClientService:PatientRegServiceService,private router:Router,private log:LoginServiceService) { }

  ngOnInit(): void {
    this.httpClientService.getpats().subscribe(data=>{this.patient=data
      console.log(this.patient)
      console.log(this.log.counter)
       }) 
  }

}
