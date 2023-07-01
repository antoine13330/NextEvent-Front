import { Component } from '@angular/core';
import {ThemeManagerService} from "../../_services/theme-manager/theme-manager.service";
import {Theme} from "../../_models/theme/theme";
import {Evenement} from "../../_models/Evenement/evenement";
import { EvenementService } from 'src/app/_services/evenement/evenement.service';

@Component({
  selector: 'app-accueil-gaming',
  templateUrl: './accueil-gaming.component.html',
  styleUrls: ['./accueil-gaming.component.scss']
})
export class AccueilGamingComponent {
  public currentTheme: Theme = "Gaming";
  public evenement: Evenement | undefined;
  public searchTerm : string = "";
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
  constructor( private themeManager: ThemeManagerService , private _evenementService : EvenementService) {
    themeManager.theme$.subscribe( theme =>{
      this.currentTheme = theme;
      this.getEvents();
    })
  }
  cacheEvents : Evenement[] = [];
  events : Evenement[] = [];
  getEvents() {
    this._evenementService.getEvenementByType().subscribe({
      next : (events) => {
        this.cacheEvents = events;
        this.onSearch();
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

  onSearch() {
    this.events = this.cacheEvents.filter((event) => {
      return event.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    console.log(this.events);
  }

}
