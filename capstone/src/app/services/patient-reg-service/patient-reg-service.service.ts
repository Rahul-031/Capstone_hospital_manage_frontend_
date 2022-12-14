import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

export class patients{

    public id:number
    public first_name:string
    public last_name:string
    public gender:string
    public dof:string
    public email:string
    public phone_no:string
    public id_proof:string
    public id_no:string
    public pass:string
    public status:string
 
  
  constructor(
     id:number,
    first_name:string,
     last_name:string,
     gender:string,
     dof:string,
     email:string,
     phone_no:string,
     id_proof:string,
     id_no:string,
     pass:string,
     status:string
  ){this.id=id
    this.first_name=first_name
    this.last_name=last_name
    this.gender=gender
    this.dof=dof
    this.email=email
    this.phone_no=phone_no
    this.id_proof=id_proof
    this.id_no=id_no
    this.pass=pass
    this.status=status
  }
}

@Injectable({
  providedIn: 'root'
})
export class PatientRegServiceService {
  
  patientname!:string
  patientlastname!:string
  
  constructor(private httpClient:HttpClient) { }
  public createPatient(patient: patients) {
    return this.httpClient.post<patients>("http://localhost:2020/api/patient", patient);
  }
  public getpats(){
    return this.httpClient.get<patients[]>('http://localhost:2020/api/patients')
  }
  public getpatByid(id: number){
    return this.httpClient.get<patients[]>("http://localhost:2020/api/"+id)  
  }
  public deletepatById(id:any){
    return this.httpClient.put<patients>("http://localhost:2020/api/"+id,id)
  }
}
