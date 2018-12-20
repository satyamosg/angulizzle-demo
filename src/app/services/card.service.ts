import { Injectable } from '@angular/core';

export interface ICard {
  title:string;
  text:string;
  buttontext:string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): ICard[] {
    return [
      {
        title: 'Hello',
        text: "Ballz text1 to build on the card title and make up the bulk of the card's content.",
        buttontext: 'Click',
      },
      {
        title: 'Ya lil',
        text: "Ballz text2 to build on the card title and make up the bulk of the card's content.",
        buttontext: 'here',
      },
      {
        title: 'Bhetch',
        text: "Ballz text3 to build on the card title and make up the bulk of the card's content.",
        buttontext: '4 fuckall',
      }
  
    ]
  }
}
