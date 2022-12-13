import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-logoutService/login-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentServiceService } from 'src/app/services/department-service/department-service.service';
import { department } from 'src/app/services/department-service/department';
import { doctors } from 'src/app/services/doctor-reg-service/doctor';
import { DoctorRegistrationServiceService } from 'src/app/services/doctor-reg-service/doctor-registration-service.service';
import { identifierName } from '@angular/compiler';
import { PatientRegServiceService } from 'src/app/services/patient-reg-service/patient-reg-service.service';
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
  log:boolean = this.login.counter
  depts:department[]=[]
  constructor(private login:LoginServiceService,private router:Router,private dept:DepartmentServiceService,private doc:DoctorRegistrationServiceService,private pat :PatientRegServiceService) { }
  doctor:doctors[]=[]
  // departId:number=0
  firstname:string=this.pat.patientname
  lastname:string=this.pat.patientlastname
  
  logout( ){
    this.login.counter=false
    console.log(this.log)
    console.log(this.login.counter)
    this.pat.patientname=''
    this.pat.patientlastname=''
    this.router.navigate(['/home'])
  }
  storeid(id:any){
    this.doc.deptId=id.value
    console.log(this.doc.deptId)
    this.doc.getDoctorsbyid(id.value).subscribe(data=>{this.doctor=data
      console.log(this.doctor)})
    this.router.navigate(['/doctor-dept'])
    
  }

  ngOnInit(): void {
    this.dept.getdept().subscribe(data=>{this.depts=data
      console.log(this.depts)

    
  })
  

}
}
