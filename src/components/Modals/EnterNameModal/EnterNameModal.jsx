import React, { memo, useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserName } from 'actions/appActions';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Modal from 'components/Generic/Modal';

const enterNameModalReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

const EnterNameModal = memo(({ saveUserName }) => {
  const [state, dispatch] = useReducer(enterNameModalReducer, { userName: '' });
  return (
    <Modal title="Enter your username">
      <TextInput
        id="userName"
        name="userName"
        label="Username"
        value={state.userName}
        onChange={event =>
          dispatch({
            type: 'INPUT_CHANGE',
            payload: event.target.value
          })
        }
      />
      <Button
        onClick={() => {
          saveUserName({ userName: state.userName });
        }}
      >
        Enter
      </Button>
    </Modal>
  );
});

EnterNameModal.propTypes = {
  saveUserName: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserName: userName => dispatch(saveUserName(userName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EnterNameModal);
