import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


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
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><img id="logo" src={Logo} alt="logo" /></Link>
        </div>
        <div className="navbar-links">
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <a href="#">Sign in</a>
          <img onClick={this.handleClick} id="bag" src={IconBag} alt="bag" />
        </div>
        {
          this.state.show ? (<CardPopup/>) : null
        }
      </div>
      
    )
  }
}


export default Navbar;