import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StaffComponent } from './staff/staff.component'; 
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'app-home'},
  { path: 'app-registration',component: RegistrationComponent},
  { path: 'app-login',component: LoginComponent},
  { path: 'app-home',component: HomeComponent},
  {path:'app-carousel',component:CarouselComponent},
  {path:'app-staff',component:StaffComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [RegistrationComponent,LoginComponent,HomeComponent]