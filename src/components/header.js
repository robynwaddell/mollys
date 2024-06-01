import React from 'react';
// import '../style/index.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Molly's Bar</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;