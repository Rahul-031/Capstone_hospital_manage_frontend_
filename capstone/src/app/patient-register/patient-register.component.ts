import { Component, OnInit } from '@angular/core';
import { PatientRegServiceService,patients } from '../patient-reg-service/patient-reg-service.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  id_proof =[{id:"adharCard",name:"Adhar Card"},
  {id:"VoterCard",name:"Voter Card"},
  {id:"PanCard",name:"Pan Card"},]
  
  pa : patients = new patients("","","","","","","","","")
  
  constructor( private prst: PatientRegServiceService) { }

  ngOnInit(): void {
  }

  createpat():void{
    this.prst.createPatient(this.pa).subscribe(data=>{
      alert("ho gaya bhai");
      console.log(data)
    })
  }

}
