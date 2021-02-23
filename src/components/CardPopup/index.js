import React from 'react';
import  { CardPopupContainer } from './styles'

import Buttons from '../Buttons'

// class component
class CardPopup extends React.Component {
  render() {
    return(
      <CardPopupContainer>
        <Buttons>Go to checkout</Buttons>
      </CardPopupContainer>
    )
  }
}
export default CardPopup;