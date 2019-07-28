import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { creationFormUpdateField } from 'redux/actions/actions';

const Starter = ({ createRoomForm, handler, updateFormField }) => {
  const onChange = ({ target: { name, value } }) => {
    updateFormField({ name, value });
  };
  return (
    <form onSubmit={handler}>
      <TextField
        id="roomName"
        name="roomName"
        label="Room name"
        value={createRoomForm.roomName}
        onChange={onChange}
      />
      <TextField
        id="username"
        name="username"
        label="Username"
        value={createRoomForm.username}
        onChange={onChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Room
      </Button>
    </form>
  );
};

Starter.propTypes = {
  createRoomForm: PropTypes.shape({
    roomName: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  handler: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    createRoomForm: state.createForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFormField: payload => dispatch(creationFormUpdateField(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starter);
