import { Component, OnInit } from '@angular/core';
import { CardService, ICard } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards:ICard[];
  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCards();
  }

  ngOnInit() {
  }

}
