import React from 'react';
import CardView from './CardView.jsx';
import '../style/Hand.css';
import placeholder from '../assets/placeholder.png';


export default function Hand ({ dealer, cards}) {
  const handContent =
    cards.length === 0 ?
      <div className='hand'>
        <div>
          <img src={placeholder} alt="" />
        </div>
      </div>
    :
      cards.map((card, i) =>
        <div className='hand' key={i}>
          <CardView card={card}></CardView>
        </div>)

  if (dealer && cards.length === 2) {
    handContent[0].props.children.props.card.flip = false;
  }

  return (
    <div className='hand-container'>
      {handContent}
    </div>
  )
}