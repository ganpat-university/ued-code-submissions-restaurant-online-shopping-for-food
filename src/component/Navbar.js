import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from '../assests/logo_brand.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';


function navbar() {
  return (
    <div className='navbar'>
      <div className="navleft">
        <img src={Logo} /><p id='brand'>Classic Chao</p>
      </div>
      
      <div className="navcenter">
        <Link to="/" className="navbar__link1">Home</Link>
        <Link to="/menu" className="navbar__link2">Menu</Link>
        <Link to="/about" className="navbar__link3">About</Link>
        <Link to="/services" className="navbar__link4">Services</Link>
        <Link to="/contact" className="navbar__link5">Contact</Link>
      </div>
      <span class="target"></span>

      <div className="navright">
        <div className="addcart">
          <span id='span'></span>
          <ShoppingCartOutlined className='cart' /> <SearchIcon className='search' />
        </div>
      </div>
    </div>

  )
}

export default navbar