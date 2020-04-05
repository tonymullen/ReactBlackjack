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
    this.gs = new GameState(this);
  }

  render() {
    console.log("rendering wtf")
    console.log(this.gs.player_cards);
    return (
      <div className="App">
        <header className="App-header">
            <Hand isDealer={true} cards={this.gs.dealer_cards}/>
            <ButtonPanel gs={this.gs} />
            <Hand isDealer={false} cards={this.gs.player_cards}/>
        </header>
      </div>
    );
  }
}
