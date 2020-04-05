import React from 'react';
import CardView from './CardView.jsx';
import './Hand.css';


export default class Hand extends React.Component {
  render() {
    console.log("Rendering hand")
    const { isDealer, cards } = this.props
    {
      return (
        <div className='hand-container'>
        {
          cards.map((card, i) =>
          <div className='hand' key={i}>
            <CardView card={card}></CardView>
          </div>)
        }
        </div>
      )
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
    console.log("Something changed");
  }
}