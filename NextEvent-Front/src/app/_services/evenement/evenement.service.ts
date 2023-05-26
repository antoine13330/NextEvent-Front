import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private currentTheme: string | null = '';
  constructor(private httpClient: HttpClient) {

  }
  //TODO finir la requete en fonction de l'api
  /*getEvenementByType(){
    this.currentTheme = localStorage.getItem("ne-theme")
    return this.httpClient.get()
  }*/
}
