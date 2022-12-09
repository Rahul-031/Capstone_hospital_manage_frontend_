import { Component, OnInit } from '@angular/core';
import { patients,PatientRegServiceService } from '../patient-reg-service/patient-reg-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patient: patients[] =[]
  constructor(private httpClientService:PatientRegServiceService) { }

  ngOnInit(): void {
    this.httpClientService.getpats().subscribe(data=>{this.patient=data
       })
  }

}
