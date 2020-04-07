import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const images = require.context('../assets/png/1x', true);

export default class CardView extends React.Component {

  render() {
    const { card } = this.props
    const face = card.face;
    const suit = card.suit;
    return (
      <Flippy isFlipped={card.flip} >
        <FrontSide>
          <img src={images(`./${face}_${suit}.png`)} alt="" />
        </FrontSide>
        <BackSide>
          <img src={images(`./back-blue.png`)} alt="" />
        </BackSide>
      </Flippy>
    )
  }
}
