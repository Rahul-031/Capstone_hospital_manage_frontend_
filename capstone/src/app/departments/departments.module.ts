import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmergencyComponent } from './emergency/emergency.component';

import { ChildComponent } from './child/child.component';
import { CardioComponent } from './cardio/cardio.component';
import { DentalComponent } from './dental/dental.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { GeneralsurgeryComponent } from './generalsurgery/generalsurgery.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { OrthopedicComponent } from './orthopedic/orthopedic.component';
import { RadiologyComponent } from './radiology/radiology.component';


@NgModule({
  declarations: [
    DeptlistComponent,
    EmergencyComponent,
   
    ChildComponent,
        CardioComponent,
        DentalComponent,
        DermatologyComponent,
        DiabetesComponent,
        GeneralsurgeryComponent,
        NephrologyComponent,
        NeurologyComponent,
        OrthopedicComponent,
        RadiologyComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
