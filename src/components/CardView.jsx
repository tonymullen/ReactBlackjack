import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const images = require.context('../assets/png/1x', true);

const CardView = ({ card:{face, suit, flip} }) => (
  <Flippy isFlipped={flip} >
    <FrontSide>
      <img src={images(`./${face}_${suit}.png`)} alt={`${face} of ${suit}`} />
    </FrontSide>
    <BackSide>
      <img src={images(`./back-blue.png`)} alt="" />
    </BackSide>
  </Flippy>
);

export default CardView;