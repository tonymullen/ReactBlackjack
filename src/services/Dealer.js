import { Subject, from, timer, zip  } from 'rxjs';
import { concat } from 'rxjs/operators';
import Card from './Card.js';

export default class Dealer {
  constructor () {
    this.deck = [];
    this.freshDeck();
  }

  freshDeck() {
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const faces =  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

    // this.deal$ = new Observable();
    this.distribution$ = new Subject(); // strings
    this.trigger$ = new Subject(); // booleans

    this.deck = this.shuffle(
      // generate deck from suits and faces
      suits.map(s =>
        faces.map(f =>
        new Card(s,f)
        )
      ).reduce((accumulator, list) =>
        accumulator.concat(list)
      )
    );
    this.deck[1].flip = true;

    // The deal proper is queued up behind the trigger subject
    this.deal$ = this.trigger$.pipe(concat(
      zip(
          timer(1000, 1000),
          // Create observable from shuffled deck and distribution
          zip(
            this.distribution$,
            from(this.deck)
          )
        )
      )
    );
  }

  deal() {
    // feed and complete the trigger subject to release the deal
    this.trigger$.next(true);
    this.trigger$.complete();

    // initial distribution for the first 4 cards
    this.distribution$.next('p');
    this.distribution$.next('d');
    this.distribution$.next('p');
    this.distribution$.next('d');
  }

  hit() {
    this.distribution$.next('p');
  }

  dealToDealer() {
    this.distribution$.next('d');
  }

  shuffle(array) {
    let currentInd = array.length, temp, randInd;
    while (0 !== currentInd ) {
      randInd = Math.floor(Math.random() * currentInd);
      currentInd--;
      temp = array[currentInd]
      array[currentInd] = array[randInd];
      array[randInd] = temp;
    }
    return array;
  }
}