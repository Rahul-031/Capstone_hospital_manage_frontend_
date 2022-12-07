import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardioComponent } from './cardio/cardio.component';
import { ChildComponent } from './child/child.component';
import { DentalComponent } from './dental/dental.component';

import { DeptlistComponent } from './deptlist/deptlist.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { GeneralsurgeryComponent } from './generalsurgery/generalsurgery.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { OrthopedicComponent } from './orthopedic/orthopedic.component';
import { RadiologyComponent } from './radiology/radiology.component';

const routes: Routes = [
  {path:"deptlist",component:DeptlistComponent},
  {path:"emergency",component:EmergencyComponent},
  {path:"child",component:ChildComponent},
  {path:"cardio",component:CardioComponent},
  {path:"dental",component:DentalComponent},
  {path:"dermatology",component:DermatologyComponent},
  {path:"diabetes",component:DiabetesComponent},
  {path:"generalsurgery",component:GeneralsurgeryComponent},
  {path:"nephrology",component:NephrologyComponent},
  {path:"neurology",component:NeurologyComponent},
  {path:"orthopedic",component:OrthopedicComponent},
  {path:"radiology",component:RadiologyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
