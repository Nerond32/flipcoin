import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ children, title }) => {
  return (
    <div className="modal">
      {title && <h2>{title}</h2>}
      <div className="modal-body">{children}</div>
    </div>
  );
};

Modal.defaultProps = {
  title: ''
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Modal;
