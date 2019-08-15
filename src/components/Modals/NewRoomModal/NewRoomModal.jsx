import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Generic/Modal';
import Starter from 'components/App/Content/Starter';

const EnterNameModal = () => {
  const handler = () => {};
  return (
    <Modal>
      <h4>Room not found, want to create one?</h4>
      <Starter handler={handler} />
    </Modal>
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
