import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DepartmentsModule } from './departments/departments.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './patient-list/addpipes/filter.pipe';
import { DoctorRegComponent } from './doctor-reg/doctor-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    DoctorLoginComponent,
    AdminComponent,
    ContactComponent,
    AdminLoginComponent,
    PatientListComponent,
    FilterPipe,
    DoctorRegComponent,
    
     ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:'patient-login',component:PatientLoginComponent},
      {path:'admin-login',component:AdminLoginComponent},
      {path:'doctor-login',component:DoctorLoginComponent},
      {path:'admin',component:AdminComponent},
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
      {path :'', redirectTo: '/home', pathMatch: 'full'},
      {path:'patient-register',component: PatientRegisterComponent},
      {path:'patient-list',component: PatientListComponent},
      {path:'doctor-register',component: DoctorRegComponent}
     
    ]),
    AppRoutingModule,
    FormsModule,
    DepartmentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
