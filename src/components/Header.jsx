import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <h1>Glenn Cotales</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">FAQ</a></li>
          <li><a href="#gallery">Photos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
