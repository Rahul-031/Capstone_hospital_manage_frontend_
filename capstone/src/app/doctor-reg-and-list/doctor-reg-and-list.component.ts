import { Component, OnInit } from '@angular/core';
import { DoctorRegistrationServiceService } from '../services/doctor-reg-service/doctor-registration-service.service';
import { doctors } from '../services/doctor-reg-service/doctor';
import { DepartmentServiceService } from '../services/department-service/department-service.service';
import { department } from '../services/department-service/department';

@Component({
  selector: 'app-doctor-reg-and-list',
  templateUrl: './doctor-reg-and-list.component.html',
  styleUrls: ['./doctor-reg-and-list.component.css']
})
export class DoctorRegAndListComponent implements OnInit {

  doc:doctors=new doctors()
  constructor(private drst:DoctorRegistrationServiceService,private dept:DepartmentServiceService) { }
  depts:department[]=[]
  

  ngOnInit(): void {
    this.dept.getdept().subscribe(data=>{this.depts=data
      console.log(this.depts)
      console.log(data)
    })
    
  }

  createDoc():void{
    console.log(this.doc)
    this.drst.createDoctor(this.doc).subscribe(data=>{
      alert("successfully registered")
      console.log(data)
    })
  }

}
