import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeedetails/employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { OOPSComponent } from './oops/oops.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {path:"",component:AppComponent},
  {path:"Login",component:LoginComponent},
  {path:"SignUp",component:SignupComponent},
  {path:"Product",loadChildren: () => import( './employeedetails/employeedetails.module').then(m => m.EmployeedetailsModule)},
  
  {path:"**",component:OOPSComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
