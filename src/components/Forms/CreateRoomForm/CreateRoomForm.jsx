import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import { saveUserName, saveUserToken } from 'redux/actions/actions';

const createRoomFormReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.newValue };
    default:
      return state;
  }
};

const CreateRoomForm = ({
  history,
  match,
  saveUserName,
  saveUserToken,
  userName
}) => {
  const handleRoomCreation = ({ roomName, userName }) => {
    axios
      .post('api/rooms', { roomName, userName })
      .then(response => {
        if (response.status === 201) {
          const { userName, userToken } = response.data;
          saveUserToken({ userToken, userName });
          // history.push(`/room/${roomName}`);
        }
      })
      .catch(() => {});
  };
  const [state, dispatch] = useReducer(createRoomFormReducer, {
    userName,
    roomName: match.params.roomName || ''
  });
  return (
    <form>
      <TextInput
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
      <TextInput
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
        onClick={event => {
          event.preventDefault();
          saveUserName({ userName: state.userName });
          handleRoomCreation({ ...state });
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      roomName: PropTypes.string
    })
  }).isRequired,
  saveUserName: PropTypes.func.isRequired,
  saveUserToken: PropTypes.func.isRequired,
  userName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserName: userName => dispatch(saveUserName(userName)),
    saveUserToken: payload => dispatch(saveUserToken(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateRoomForm));
