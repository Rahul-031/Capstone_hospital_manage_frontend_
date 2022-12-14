import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from '../services/appointment-service/appointment-service.service';
import { appointment } from '../services/appointment-service/appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  apoint:appointment[]=[]

  constructor(private app:AppointmentServiceService) { }

  ngOnInit(): void {
    this.app.getApoint().subscribe(data=>{console.log(this.apoint=data)})
  }
  

}
