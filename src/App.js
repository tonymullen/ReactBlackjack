import React from 'react';
import './App.css';
import GameController from './services/GameController.js';
import Hand from './components/Hand.jsx';
import ButtonPanel from './components/ButtonPanel.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.gc = new GameController(this);
    this.state = {
      dealerCards: this.gc.dealerCards,
      playerCards: this.gc.playerCards
    }
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Hand dealer={true} cards={this.state.dealerCards}
            />
            <ButtonPanel gc={this.gc} />
            <Hand dealer={false} cards={this.state.playerCards}
            />
        </header>
      </div>
    );
  }
}
