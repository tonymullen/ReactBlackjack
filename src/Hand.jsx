import React from 'react';


export default class Hand extends React.Component {
  render() {
    const { isDealer } = this.props
    if (isDealer) {
      return (
        <div>
          Dealer
        </div>
      )
    }
    else {
      return (
        <div>
          Player
        </div>
      )
    }
  }
}