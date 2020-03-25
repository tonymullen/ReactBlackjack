import React from 'react';
import './App.css';
import Hand from './Hand.jsx';
import ButtonPanel from './ButtonPanel.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Hand isDealer={true} />
          <ButtonPanel />
          <Hand isDealer={false} />
        </p>
      </header>
    </div>
  );
}

export default App;
