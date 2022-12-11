import { Component, OnInit } from '@angular/core';
import { DoctorRegistrationServiceService } from '../services/doctor-reg-service/doctor-registration-service.service';
import { doctors } from '../services/doctor-reg-service/doctor';
@Component({
  selector: 'app-doctor-reg-and-list',
  templateUrl: './doctor-reg-and-list.component.html',
  styleUrls: ['./doctor-reg-and-list.component.css']
})
export class DoctorRegAndListComponent implements OnInit {
  doc:doctors=new doctors("","","","","","","","","",1,1,"","Active","")
  constructor(private drst:DoctorRegistrationServiceService) { }
  

  ngOnInit(): void {
    console.log()
  }

  createDoc():void{
    console.log(this.doc)
    this.drst.createDoctor(this.doc).subscribe(data=>{
      alert("successfully registered")
      console.log(data)
    })
  }

}
