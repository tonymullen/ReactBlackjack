import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const suits = ['heart', 'diamond', 'spade', 'club'];
const faces =  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
const images = {}
suits.forEach(suit => {
  faces.forEach(face => {
    images[`./${face}_${suit}.png`] = require(`../assets/png/1x/${face}_${suit}.png`);
  })
})
const cardBack = require('../assets/png/1x/back-blue.png');

const CardView = ({ card:{face, suit, flip} }) => (
  <Flippy isFlipped={flip} >
    <FrontSide>
      <img src={images[`./${face}_${suit}.png`]} alt={`${face} of ${suit}`} />
    </FrontSide>
    <BackSide>
      <img src={cardBack} alt="" />
    </BackSide>
  </Flippy>
);

export default CardView;