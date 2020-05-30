import React from 'react';
import './App.css';
import GameManager from './components/GameManager.js';


export default class App extends React.Component {
  constructor() {
    super();
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Blackjack!
          </h1>
        </header>
        <GameManager />
      </div>
    );
  }
}
