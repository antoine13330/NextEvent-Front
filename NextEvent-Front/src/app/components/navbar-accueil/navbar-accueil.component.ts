import { Component } from '@angular/core';
import {NavLink} from "../../_models/Navigation/link";
import {NavlinkService} from "../../_services/navigation/navlink.service";

@Component({
  selector: 'app-navbar-accueil',
  templateUrl: './navbar-accueil.component.html',
  styleUrls: ['./navbar-accueil.component.scss']
})
export class NavbarAccueilComponent {

  public logoUrl : string = 'assets/img/logo/NextEvent.png'
  public navLinks : NavLink[];

  constructor(
    private navlinksService : NavlinkService,
  ) {
    this.navLinks = this.navlinksService.links
  }

}
