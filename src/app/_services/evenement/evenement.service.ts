import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environnement } from 'environnement';
import { Evenement, NEventType } from 'src/app/_models/Evenement/evenement';
import { ThemeManagerService } from '../theme-manager/theme-manager.service';
import { Theme } from 'src/app/_models/theme/theme';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  apiUrl =  `${environnement.apiUrl}/api/evenement`;
  autoType : Theme = 'Festival';
  constructor(private httpClient: HttpClient, private _themeManager : ThemeManagerService ) {
    this._themeManager.theme$.subscribe( (theme) => {
      this.autoType = theme;
    });
  }
  getEvenementByType(type? : Theme) {
    if ( !type )
      type = this.autoType;
    return this.httpClient.get<Evenement[]>(`${this.apiUrl}s?typeEvenement=${type}`)
  }

  getEventById(id : number) {
    return this.httpClient.get<Evenement>(`${this.apiUrl}/${id}`)
  }
}
