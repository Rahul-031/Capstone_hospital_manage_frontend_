import { Component, OnInit } from '@angular/core';
import { DoctorRegistrationServiceService } from 'src/app/services/doctor-reg-service/doctor-registration-service.service';
import { doctors } from 'src/app/services/doctor-reg-service/doctor';
@Component({
  selector: 'app-doctor-department',
  templateUrl: './doctor-department.component.html',
  styleUrls: ['./doctor-department.component.css']
})
export class DoctorDepartmentComponent implements OnInit {
  id:number=19
  doctor:doctors[]=[]


  constructor(private doc:DoctorRegistrationServiceService) { }

  ngOnInit(): void {
    this.doc.getDoctorsbyid(this.id).subscribe(data=>{this.doctor=data
    console.log(this.doctor)})
  }

}
