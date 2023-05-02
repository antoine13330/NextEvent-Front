import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";

const routes: Routes = [
  {path : '', component : AccueilComponent},
  {path : 'accueil', component : AccueilComponent},
  {path : 'about', component : AccueilComponent},
  {path : 'contact', component : AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
