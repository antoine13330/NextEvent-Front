import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilGamingComponent } from './components/accueil-gaming/accueil-gaming.component';
import { NavbarAccueilComponent } from './components/navbar-accueil/navbar-accueil.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { MainCardComponent } from './components/main-card/main-card.component';
import {MatCardModule} from "@angular/material/card";
import { FavorisCardButtonComponent } from './components/favoris-card-button/favoris-card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilGamingComponent,
    NavbarAccueilComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    SearchBarComponent,
    MainCardComponent,
    FavorisCardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
