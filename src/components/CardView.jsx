import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const images = require.context('../assets/png/1x', true);

export default class CardView extends React.Component {

  render() {
    const { card, isFlipped } = this.props
    const face = card.face;
    const suit = card.suit;
    return (
      <Flippy
        //flipOnClick={true}
        isFlipped={card.flip}
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
      >
        <FrontSide style={{ padding: '0px', }} >
          <img src={images(`./${face}_${suit}.png`)} alt="" />
        </FrontSide>
        <BackSide style={{ padding: '0px', }} >
          <img src={images(`./back-blue.png`)} alt="" />
        </BackSide>
      </Flippy>
    )
  }
}
