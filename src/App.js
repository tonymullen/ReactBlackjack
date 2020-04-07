import React from 'react';
import './App.css';
import GameState from './services/GameState.js';
import Hand from './components/Hand.jsx';
import ButtonPanel from './components/ButtonPanel.jsx';


// function App() {
//   const gs = new GameState(this);
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Hand isDealer={true} cards={gs.dealer_cards}/>
//           <ButtonPanel gs={gs} />
//           <Hand isDealer={false} cards={gs.player_cards}/>
//       </header>
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component {
  constructor() {
    super();
    console.log(this.dealerHandElement);
    this.gs = new GameState(this);
    this.state = {
      dealerCards: this.gs.dealerCards,
      playerCards: this.gs.playerCards
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Hand dealer={true} cards={this.state.dealerCards}
            />
            <ButtonPanel gs={this.gs} />
            <Hand dealer={false} cards={this.state.playerCards}
            />
        </header>
      </div>
    );
  }

  //update
}
