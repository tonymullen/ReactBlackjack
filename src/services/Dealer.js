import { Observable, Subject, from, timer, zip  } from 'rxjs';
import { concat } from 'rxjs/operators';
import Card from './Card.js';

export class Dealer {
  constructor () {
    this.deck = this.freshDeck();
  }

  freshDeck() {
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const faces =  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    return [Card('heart', '5')];
  }
}