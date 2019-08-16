import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Generic/Modal';
import CreateRoomForm from 'components/Forms/CreateRoomForm';

const NewRoomModal = () => {
  return (
    <Modal>
      <h2>Room not found, want to create one?</h2>
      <CreateRoomForm />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

export default connect(mapStateToProps)(NewRoomModal);
