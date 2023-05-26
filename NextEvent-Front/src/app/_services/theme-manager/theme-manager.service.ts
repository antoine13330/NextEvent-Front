import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Theme, ThemeColor} from "../../_models/theme/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  private _theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>("Gaming");
  theme$: Observable<Theme> = this._theme.asObservable();
  constructor() {
    this.theme$.subscribe(value => {
      this.applyTheme(value)
    })
    const savedTheme = localStorage.getItem("ne-theme");
    if(savedTheme && savedTheme === "Festival"){
      this._theme.next(savedTheme)
    }
  }
  applyTheme(param: Theme){
    document.documentElement.style.setProperty('--primary-color', ThemeColor[param])
  }
  setTheme(param: Theme){
    this._theme.next(param);
    localStorage.setItem("ne-theme", param)
  }
}
