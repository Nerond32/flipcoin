import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from 'components/Generic/Modal';

const enterNameModalReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { input: action.payload };
    default:
      throw new Error();
  }
};

const EnterNameModal = ({ handleSubmit }) => {
  const [state, dispatch] = useReducer(enterNameModalReducer, { input: '' });
  return (
    <Modal>
      <h4>Enter your userName:</h4>
      <TextField
        id="userName"
        name="userName"
        label="Username"
        value={state.input}
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
        onClick={() => handleSubmit(state.input)}
      >
        Enter
      </Button>
    </Modal>
  );
};

EnterNameModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.createForm.userName
  };
};

export default connect(mapStateToProps)(EnterNameModal);
