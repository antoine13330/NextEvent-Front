import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Evenement} from "../../_models/Evenement/evenement";

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnChanges {
  //TODO
  //@Input() evenement: Evenement;
  @Input() event : Evenement | undefined;
  @Input() id : number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.event);
  }

}
