import React from 'react';
import { Link } from 'react-router-dom';
import coinImg from './coin.png';

const Header = () => {
  return (
    <Link to="/">
      <img src={coinImg} alt="Logo" />
    </Link>
  );
};

export default Header;
