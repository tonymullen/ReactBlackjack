import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const images = require.context('../assets/png/1x', true);

export default function CardView({ card:{face, suit, flip} }) {

  return (
    <Flippy isFlipped={flip} >
      <FrontSide>
        <img src={images(`./${face}_${suit}.png`)} alt="" />
      </FrontSide>
      <BackSide>
        <img src={images(`./back-blue.png`)} alt="" />
      </BackSide>
    </Flippy>
  )
}
