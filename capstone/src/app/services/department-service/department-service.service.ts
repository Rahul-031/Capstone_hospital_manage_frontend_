import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private httpClient:HttpClient) { }

  public getdept(){
    return this.httpClient.get<department[]>('http://localhost:2020/apid/departments')
  }
}
