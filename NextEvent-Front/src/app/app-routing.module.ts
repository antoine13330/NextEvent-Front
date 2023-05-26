import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilGamingComponent} from "./components/accueil-gaming/accueil-gaming.component";
import {RegisterComponent} from "./components/register/register.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path : '', component : AccueilGamingComponent},
  {path : 'accueil', component : AccueilGamingComponent},
  {path : 'about', component : AboutUsComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : '**', component : AccueilGamingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
