import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Generic/Modal';
import RoomForm from 'components/Forms/RoomForm';

const NewRoomModal = () => {
  return (
    <Modal title="Room not found, want to create one?">
      <RoomForm />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

export default connect(mapStateToProps)(NewRoomModal);
