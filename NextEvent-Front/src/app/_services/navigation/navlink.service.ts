import { Injectable } from '@angular/core';
import {NavLink} from "../../_models/Navigation/link";

@Injectable({
  providedIn: 'root'
})
export class NavlinkService {

  public readonly links : NavLink[] = [
    {
      name : 'Accueil',
      url : '/accueil',
      authorization : 0,
      isAuthorized : false
    } ,
    {
      name : 'A Propos',
      url : '/about',
      authorization : 0,
      isAuthorized : false
    } ,
    {
      name : 'Contact',
      url : '/contact',
      authorization : 0,
      isAuthorized : false
    } ,
  ]
  constructor() { }
}
