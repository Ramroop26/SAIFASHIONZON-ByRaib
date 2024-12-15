import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => (
  <div className="navbar">  
  
  <a>
    <ul>
      <image src='https://saifashion.com/wp-content/uploads/2021/05/logo-2048x524.png'></image>
      <li><NavLink activeClassName="selected" className="nav-link" exact to="/">SAIFASHIONZONByRaiba </NavLink></li>
      <li><p><NavLink activeClassName="selected" className="nav-link" to="/women">Women</NavLink></p></li>
      <li><p><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></p></li>
      <li><p><NavLink activeClassName="selected" className="nav-link" to="/clothes">Clothes</NavLink></p></li>
      <li><p><NavLink activeClassName="selected" className="nav-link" to="/accessories">Accessories</NavLink></p></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/ABOUT">LOGIN</NavLink></li>

      
      

    </ul>
    </a>
    </div>
   
  
);

export default Navbar;
