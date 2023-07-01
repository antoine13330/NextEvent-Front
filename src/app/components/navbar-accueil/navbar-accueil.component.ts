import { Component } from '@angular/core';
import {NavLink} from "../../_models/Navigation/link";
import {NavlinkService} from "../../_services/navigation/navlink.service";

@Component({
  selector: 'app-navbar-accueil',
  templateUrl: './navbar-accueil.component.html',
  styleUrls: ['./navbar-accueil.component.scss']
})
export class NavbarAccueilComponent {

  public logoUrl : string = '';
  public navLinks : NavLink[];
  public oui: string | undefined;

  constructor(
    private navlinksService : NavlinkService,
  ) {
    this.navLinks = this.navlinksService.links
    // @ts-ignore
    this.oui = localStorage.getItem("ne-theme");
    if(this.oui == "Festival"){
      this.logoUrl = 'assets/img/logo/NextEvent_Orange.png'
    }else{
      this.logoUrl = 'assets/img/logo/NextEvent.png'
    }
  }

}
