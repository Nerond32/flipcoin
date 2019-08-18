import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <FontAwesomeIcon className="fa-pulse" icon="spinner" size="6x" />
    </div>
  );
};

export default Loader;
