import Card from './Card.js';
import Dealer from './Dealer.js';

const RESTART_WAIT= 3000;
const MESSSAGE_WAIT = 1000;

// enum States {
//  Start,  Dealing,  Dealt,  Stay, Blackjack,  Win,  Lose, Tie,  Bust
// };

export default class GameState {
  constructor(app) {
    this.app = app;
    console.log(app)
    this.player_cards = [
              new Card('diamond', '3'),
              new Card('spade', '1'),
            ];
    this.dealer_cards = [
              new Card('club', 'king'),
              new Card('diamond', 'queen'),
              new Card('spade', '8'),
            ]
    }

  hit() {
    console.log("Hi from gamestate");
    this.player_cards.push(new Card('diamond', '7'));
    console.log(this.player_cards);
    console.log(this.app);
    this.app.render();
  }
}


