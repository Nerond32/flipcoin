import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLastUserName } from 'redux/actions/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const createRoomFormReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.newValue };
    default:
      throw new Error();
  }
};

const CreateRoomForm = ({ handler, saveLastUserName, userName }) => {
  const [state, dispatch] = useReducer(createRoomFormReducer, {
    userName,
    roomName: ''
  });
  return (
    <form onSubmit={handler}>
      <TextField
        id="roomName"
        name="roomName"
        label="Room name"
        value={state.roomName}
        onChange={event =>
          dispatch({
            type: 'INPUT_CHANGE',
            payload: { field: 'roomName', newValue: event.target.value }
          })
        }
      />
      <TextField
        id="userName"
        name="userName"
        label="Username"
        value={state.userName}
        onChange={event =>
          dispatch({
            type: 'INPUT_CHANGE',
            payload: { field: 'userName', newValue: event.target.value }
          })
        }
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={event => {
          event.preventDefault();
          saveLastUserName({ newName: state.userName });
          handler({ ...state });
        }}
      >
        Create Room
      </Button>
    </form>
  );
};

CreateRoomForm.defaultProps = {
  userName: ''
};

CreateRoomForm.propTypes = {
  handler: PropTypes.func.isRequired,
  saveLastUserName: PropTypes.func.isRequired,
  userName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveLastUserName: userName => dispatch(saveLastUserName(userName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoomForm);
