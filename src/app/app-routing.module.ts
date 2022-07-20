import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'student-details', component:StudentDetailsComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
