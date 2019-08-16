import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLastUserName } from 'redux/actions/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from 'components/Generic/Modal';

const enterNameModalReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, userName: action.payload };
    default:
      throw new Error();
  }
};

const EnterNameModal = ({ handleSubmit, saveLastUserName }) => {
  const [state, dispatch] = useReducer(enterNameModalReducer, { userName: '' });
  return (
    <Modal>
      <h2>Enter your userName:</h2>
      <TextField
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
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          saveLastUserName({ newName: state.userName });
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
  saveLastUserName: PropTypes.func.isRequired
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
)(EnterNameModal);
