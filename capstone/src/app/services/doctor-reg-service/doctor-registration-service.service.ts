import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { doctors } from './doctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorRegistrationServiceService {

  deptId!:number
  doctorname!:string
  doctorlastname!:string
  
  constructor(private httpClient:HttpClient) { 
  }
  public createDoctor(doctor: doctors) {
    return this.httpClient.post<doctors>("http://localhost:2020/apidoc/doctor", doctor);
  }

  public getDoctor( ) {
    return this.httpClient.get<doctors[]>("http://localhost:2020/apidoc/doctors");
  }
  
  public getDoctorsbyid(id:number ) {
    return this.httpClient.get<doctors[]>("http://localhost:2020/apidoc/"+id);
  }
}
