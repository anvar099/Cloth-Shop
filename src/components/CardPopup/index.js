import React from 'react';

import './styles.css';
import Buttons from '../Buttons'

// class component
class CardPopup extends React.Component {
  render() {
    return(
      <div className="card-popup-container">
        <Buttons>Go to checkout</Buttons>
      </div>
    )
  }
}
export default CardPopup;