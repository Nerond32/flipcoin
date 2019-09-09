import React, { memo, useReducer } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import { saveUserName, saveUserToken } from 'actions/appActions';
import fieldReducer from 'utils/fieldReducer';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';

const CreateRoomForm = ({
  history,
  saveUserName,
  saveUserToken,
  userName,
  userToken
}) => {
  const handleRoomCreation = ({ roomName, userName }) => {
    axios
      .post('api/rooms', { roomName, userName, userToken })
      .then(response => {
        if (response.status === 201) {
          const { userToken } = response.data;
          saveUserToken({ userToken });
          history.push(`/room/${roomName}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [state, dispatch] = useReducer(fieldReducer, {
    userName,
    roomName: ''
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
            fieldName: 'roomName',
            newValue: event.target.value
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
            fieldName: 'userName',
            newValue: event.target.value
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
  userName: '',
  userToken: ''
};

CreateRoomForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  saveUserName: PropTypes.func.isRequired,
  saveUserToken: PropTypes.func.isRequired,
  userName: PropTypes.string,
  userToken: PropTypes.string
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName,
    userToken: state.app.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserName: userName => dispatch(saveUserName(userName)),
    saveUserToken: userToken => dispatch(saveUserToken(userToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(memo(CreateRoomForm)));
