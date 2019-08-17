import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Generic/Modal';
import CreateRoomForm from 'components/Forms/CreateRoomForm';

const NewRoomModal = () => {
  return (
    <Modal title="Room not found, want to create one?">
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
