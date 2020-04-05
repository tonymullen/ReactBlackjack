import React from 'react';
import GameController from '../services/GameState.js'
import './ButtonPanel.css';

export default class ButtonPanel extends React.Component {
  render() {
    const { gs } = this.props;
    const gameState = 'Dealt'
      return (
          <div>
          {
           {
              'Start':
                <button type="button" className="deal">
                  <strong>DEAL</strong>
                </button>,
              'Dealt':
                <>
                  <button type="button" onClick={() => {gs.hit()}} className="hit">
                    <strong>HIT</strong>
                  </button>
                  <button type="button" className="stay">
                    <strong>STAY</strong>
                  </button>
                </>,
              'Dealing':
                <strong>DEALING</strong>,
              'Stay':
                <div className="message"><strong>DEALING</strong></div>,
              'Blackjack':
                <div className="message"><strong>BLACKJACK</strong></div>,
              'Win':
                <div className="message"><strong>YOU WIN</strong></div>,
              'Lose':
                <div className="message"><strong>YOU LOSE</strong></div>,
              'Tie':
                <div className="message"><strong>TIE</strong></div>,
              'Bust':
                <div className="message"><strong>BUST</strong></div>
           }[gameState]
          }
          </div>
      )

  }
}


/*


<div [ngSwitch]="gameStateService.gameState">

    <div *ngSwitchCase="'Start'">
        <button (click)="deal()" type="button" class="deal"><strong>DEAL</strong></button>
    </div>

    <div *ngSwitchCase="'Dealt'">
        <button (click)="hit()" type="button" class="hit"><strong>HIT</strong></button>
        <button (click)="stay()" type="button" class="stay"><strong>STAY</strong></button>
    </div>

    <div *ngSwitchCase="'Dealing'">
        <div class="message"><strong>DEALING</strong></div>
    </div>

    <div *ngSwitchCase="'Stay'">
        <div class="message"><strong>DEALING</strong></div>
    </div>

    <div *ngSwitchCase="'Blackjack'">
        <div class="message"><strong>BLACKJACK!</strong></div>
    </div>

    <div *ngSwitchCase="'Win'">
        <div class="message"><strong>YOU WIN</strong></div>
    </div>

    <div *ngSwitchCase="'Lose'">
        <div class="message"><strong>YOU LOSE</strong></div>
    </div>

    <div *ngSwitchCase="'Tie'">
        <div class="message"><strong>TIE</strong></div>
    </div>

    <div *ngSwitchCase="'Bust'">
        <div class="message"><strong>BUST!</strong></div>
    </div>

</div>

*/



