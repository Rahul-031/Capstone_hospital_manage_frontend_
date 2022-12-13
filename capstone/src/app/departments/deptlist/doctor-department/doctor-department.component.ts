import { Component, OnInit,Input } from '@angular/core';
import { DoctorRegistrationServiceService } from 'src/app/services/doctor-reg-service/doctor-registration-service.service';
import { doctors } from 'src/app/services/doctor-reg-service/doctor';
import { appointment } from 'src/app/services/appointment-service/appointment';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { PatientRegServiceService } from 'src/app/services/patient-reg-service/patient-reg-service.service';
@Component({
  selector: 'app-doctor-department',
  templateUrl: './doctor-department.component.html',
  styleUrls: ['./doctor-department.component.css']
})
export class DoctorDepartmentComponent implements OnInit {
  id:number=this.doc.deptId
  doctor:doctors[]=[]
  ap:appointment=new appointment("","")
  
  
  apoint(name:string){
    console.log(name)
    console.log(this.pat.patientname,this.pat.patientlastname)
    this.ap.doctorname=name
    this.ap.patientname=this.pat.patientname+" "+this.pat.patientlastname
    console.log(this.ap)
    this.point.createApoint(this.ap).subscribe(data=>{console.log(data)})
  }


  constructor(private doc:DoctorRegistrationServiceService,private pat:PatientRegServiceService,private point:AppointmentServiceService) { }

  ngOnInit(): void {
    this.doc.getDoctorsbyid(this.id).subscribe(data=>{this.doctor=data
    console.log(this.doctor)})
  }

}
