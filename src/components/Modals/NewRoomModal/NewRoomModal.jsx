import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Generic/Modal';
import CreateRoomForm from 'components/Forms/CreateRoomForm';

const EnterNameModal = () => {
  const handler = () => {};
  return (
    <Modal>
      <h4>Room not found, want to create one?</h4>
      <CreateRoomForm handler={handler} />
    </Modal>
  );
};

EnterNameModal.propTypes = {
  // handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

export default connect(mapStateToProps)(EnterNameModal);
