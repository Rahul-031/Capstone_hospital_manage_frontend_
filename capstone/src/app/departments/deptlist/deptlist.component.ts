import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-logoutService/login-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentServiceService } from 'src/app/services/department-service/department-service.service';
import { department } from 'src/app/services/department-service/department';
import { doctors } from 'src/app/services/doctor-reg-service/doctor';
import { DoctorRegistrationServiceService } from 'src/app/services/doctor-reg-service/doctor-registration-service.service';
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {

  log:boolean = this.login.counter
  depts:department[]=[]
  constructor(private login:LoginServiceService,private router:Router,private dept:DepartmentServiceService,private doc:DoctorRegistrationServiceService) { }
  doctor:doctors[]=[]
  
  logout( ){
    this.login.counter=false
    console.log(this.log)
    console.log(this.login.counter)
    this.router.navigate(['/home'])
  }
  storeid(){
    
  }

  ngOnInit(): void {
    this.dept.getdept().subscribe(data=>{this.depts=data
      console.log(this.depts)

    this.doc.getDoctorsbyid(5).subscribe(data=>{this.doctor=data
    console.log(this.doctor)})
  })
  

}
}
