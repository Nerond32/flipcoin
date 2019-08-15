import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ children }) => {
  return <div className="modal-main">{children}</div>;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
