import logo from './logo.svg';
import React from "react";


export default function Header(){
    return(
      <div className='navbar'>
        <a href="/" 
            className="navbar-logo">
          <img
            alt=""
            src={logo}
          />{' '}
        </a>
    
        {/*
      <nav className="navbar-menu">
        <a href="/reservoir">ResCal</a>
         <a href="/wrodle">Wrodle</a>
      </nav>
    */}

      </div>
    
    )
  }