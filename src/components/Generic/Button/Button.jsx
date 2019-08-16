import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children }) => {
  return <button type="button">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
