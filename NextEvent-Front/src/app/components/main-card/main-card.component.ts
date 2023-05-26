import {Component, Input} from '@angular/core';
import {Evenement} from "../../_models/Evenement/evenement";

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {
  //TODO
  //@Input() evenement: Evenement;
  @Input() title: string ='TITRE';
  @Input() date: string ='19 July 2023';
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() favorites: string = '10 favorites';
}
