import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarContainer, LogoContent, NavbarLink} from './styles';


import IconBag from '../../assets/icons/shopping-bag.png';
import Logo from '../../assets/icons/crown.png';
import CardPopup from '../CardPopup'

//state
class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // handles click
  handleClick () {
    const showState = this.state.show;
    this.setState({show: !showState})
  }


  render(){
    return (
      <NavbarContainer>
        <LogoContent>
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </LogoContent>
        <NavbarLink>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">SignUp</Link>
          <img onClick={this.handleClick} id="bag" src={IconBag} alt="bag" />
        </NavbarLink>
        {
          this.state.show ? (<CardPopup/>) : null
        }
      </NavbarContainer>
      
    )
  }
}


export default Navbar;