import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/app/_models/Evenement/evenement';
import { EvenementService } from 'src/app/_services/evenement/evenement.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsPage {
  public event? : Evenement;
  participantsCache : string[] = [];
  constructor(
    private _eventsService : EvenementService,
    private _route : ActivatedRoute) {}
  ngOnInit
  () {
    this._route.paramMap.subscribe(params => {

      const eventId = params.get('eventId');
      if (!eventId)
        return;
      this._eventsService.getEventById(parseInt(eventId)).subscribe({
        next: (event : Evenement) => {
          this.event = event;

        },
        error: (err) => {
          console.log(err);
        }
      });
      }
    )
  }

  updateFilter(term : string) {

  }

}
