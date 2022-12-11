import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

export class patients{
  
  constructor(
    public id:number,
    public first_name:string,
    public last_name:string,
    public gender:string,
    public dof:string,
    public email:string,
    public phone_no:string,
    public id_proof:string,
    public id_no:string,
    public pass:string,
    public status:string

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class PatientRegServiceService {
  
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
}
