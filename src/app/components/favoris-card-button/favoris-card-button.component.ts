import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favoris-card-button',
  templateUrl: './favoris-card-button.component.html',
  styleUrls: ['./favoris-card-button.component.scss']
})
export class FavorisCardButtonComponent {
  @Input() isFavorite = false;
  @Output() isFavoriteChange = new EventEmitter<boolean>();
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
