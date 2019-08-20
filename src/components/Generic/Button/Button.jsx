import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, classNames, noBorder, onClick, type }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${classNames} ${noBorder ? 'button-no-border' : ''}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  noBorder: false,
  classNames: '',
  onClick: () => {},
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
