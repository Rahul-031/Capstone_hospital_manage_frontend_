import { Injectable } from '@angular/core';
import { admin } from './admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

  public getadmin(){
    return this.httpClient.get<admin[]>('http://localhost:2020/apia/admins')
  }
}
