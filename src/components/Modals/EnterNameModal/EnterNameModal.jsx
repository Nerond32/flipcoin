import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserName } from 'redux/actions/actions';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Modal from 'components/Generic/Modal';

const enterNameModalReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, userName: action.payload };
    default:
      throw new Error();
  }
};

const EnterNameModal = ({ handleSubmit, saveUserName }) => {
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
          saveUserName({ newName: state.userName });
          handleSubmit(state.input);
        }}
      >
        Enter
      </Button>
    </Modal>
  );
};

EnterNameModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  saveUserName: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserName: userName => dispatch(saveUserName(userName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterNameModal);
