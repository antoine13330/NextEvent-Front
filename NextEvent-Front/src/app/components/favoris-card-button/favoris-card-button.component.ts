import { Component } from '@angular/core';

@Component({
  selector: 'app-favoris-card-button',
  templateUrl: './favoris-card-button.component.html',
  styleUrls: ['./favoris-card-button.component.scss']
})
export class FavorisCardButtonComponent {
  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
