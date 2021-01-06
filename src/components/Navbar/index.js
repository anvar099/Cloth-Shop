import React from 'react';

import './styles.css';

import IconBag from '../../assets/icons/shopping-bag.png';
import Logo from '../../assets/icons/crown.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#">Sign in</a>
        <img id="bag" src={IconBag} alt="bag" />
      </div>
    </div>
  )
}

export default Navbar;