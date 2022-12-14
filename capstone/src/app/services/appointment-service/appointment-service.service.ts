import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private Http:HttpClient) { }

  public createApoint(ap: appointment){
    return this.Http.post<appointment>("http://localhost:2020/a/appointment", ap)
  }
  public getApoint(){
    return this.Http.get<appointment[]>("http://localhost:2020/a/appointments")
  }
}
