import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
  log:boolean = this.login.counter
  
  constructor(private login:LoginServiceService,private router:Router) { }

  logout( ){
    this.login.counter=false
    console.log(this.log)
    console.log(this.login.counter)
    this.router.navigate(['/home'])

  }
  ngOnInit(): void {
    
    console.log(this.login.counter)
  }

}
