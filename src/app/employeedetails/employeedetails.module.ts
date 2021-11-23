import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes:Routes = [
  {path:"details",component:EmployeeDetailsComponent},
  {path:"List", component:EmployeeListComponent}

]

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    EmployeeListComponent,
    
  ]

  

  
})
export class EmployeedetailsModule { 
  constructor(){
    console.log("EMPLOYEE DETAILS WORKS")
  }
}



