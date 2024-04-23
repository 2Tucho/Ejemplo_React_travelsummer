import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li >
        <li><Link to='/travel'>Travel</Link></li>
      </ul >
    </nav >
  )
};

export default Nav;
