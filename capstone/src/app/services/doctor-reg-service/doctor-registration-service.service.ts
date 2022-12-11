import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { doctors } from './doctor';
@Injectable({
  providedIn: 'root'
})

export class DoctorRegistrationServiceService {

  constructor(private httpClient:HttpClient) { 
    
  }
  public createDoctor(doctor: doctors) {
    return this.httpClient.post<doctors>("http://localhost:2020/apidoc/doctor", doctor);
  }
}
