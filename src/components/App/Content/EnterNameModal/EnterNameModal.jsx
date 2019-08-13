import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import './EnterNameModal.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    <div className="modal-main">
      <TextField
        id="username"
        name="username"
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
    </div>
  );
};

EnterNameModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default EnterNameModal;
