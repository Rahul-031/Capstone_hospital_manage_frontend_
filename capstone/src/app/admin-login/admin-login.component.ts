import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { admin } from '../services/admin-service/admin';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service/admin-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  add:admin[]=[]

  constructor(private admin:AdminServiceService,private router:Router) { }

  login(form:NgForm){
    for(let i of this.add){
      if(form.value.user==i.username &&form.value.password==i.pass){
        this.router.navigate(['/admin'])
      }
    }
    
  }
  ngOnInit(): void {
    this.admin.getadmin().subscribe(data=>{this.add=data})
  }

}
