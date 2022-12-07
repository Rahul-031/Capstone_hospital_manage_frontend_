import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/

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
      console.log(this.regularExpression.test(form.value.pass))
      if (!this.regularExpression.test(form.value.pass)) {
        alert("password should contain atleast one number and one special character")
      }
    }

    if (form.value.pass.length > this.minNumberofChars && form.value.pass.length < this.maxNumberofChars && this.regularExpression.test(form.value.pass)) {
      console.log(this.regularExpression.test(form.value.pass))
      document.write('Successfully login')
    }


  }
  constructor() { }

  ngOnInit(): void {
  }

}
