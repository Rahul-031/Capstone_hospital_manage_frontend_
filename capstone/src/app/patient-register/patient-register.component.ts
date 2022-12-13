import { Component, OnInit } from '@angular/core';
import { PatientRegServiceService,patients } from '../services/patient-reg-service/patient-reg-service.service';
import { proofId } from './id_proof';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  
  pa : patients = new patients("","","","","","","","","","active")
  
  constructor( private prst: PatientRegServiceService) { }
  id_proof=[new proofId("adhar"),new proofId("voter"),new proofId("pan"), ]
  ngOnInit(): void {
    console.log(this.id_proof);
  }

  createpat():void{
    this.prst.createPatient(this.pa).subscribe(data=>{
      alert("ho gaya bhai");
      console.log(data)
    })
  }

}
