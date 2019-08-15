import React from 'react';
import { connect } from 'react-redux';
import './NewRoomModal.scss';

import Starter from '../../Starter';

const EnterNameModal = () => {
  const handler = () => {};
  return (
    <div className="modal-main">
      <h4>Room not found, want to create one?</h4>
      <Starter handler={handler} />
    </div>
  );
};

EnterNameModal.propTypes = {
  // handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.createForm.userName
  };
};

export default connect(mapStateToProps)(EnterNameModal);
