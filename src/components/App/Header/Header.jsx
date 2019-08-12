import React from 'react';
import { Link } from 'react-router-dom';
import coinImg from './coin.png';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={coinImg} alt="Logo" />
      </Link>
      <h1>Flipcoin</h1>
      <h2>A fair multi-person coin toss</h2>
    </header>
  );
};

export default Header;
