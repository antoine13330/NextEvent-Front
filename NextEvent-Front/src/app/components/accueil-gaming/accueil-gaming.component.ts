import { Component } from '@angular/core';
import {ThemeManagerService} from "../../_services/theme-manager/theme-manager.service";
import {Theme} from "../../_models/theme/theme";
import {Evenement} from "../../_models/Evenement/evenement";

@Component({
  selector: 'app-accueil-gaming',
  templateUrl: './accueil-gaming.component.html',
  styleUrls: ['./accueil-gaming.component.scss']
})
export class AccueilGamingComponent {
  public currentTheme: Theme = "Gaming";
  public evenement: Evenement | undefined;
  imageBanniere: string = "assets/img/banniere/banniere_esport.png";
  setTheme(theme: Theme) {
    this.currentTheme = theme;
    this.themeManager.setTheme(theme);
    if(theme === "Gaming")
    {
      this.imageBanniere = "assets/img/banniere/banniere_esport.png"
    } else {
      this.imageBanniere = "assets/img/banniere/banniere-festival.png"
    }
  }
  constructor( private themeManager: ThemeManagerService) {
    themeManager.theme$.subscribe( theme =>{this.currentTheme = theme})
  }
}
