import React, { memo, useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserName } from 'actions/appActions';
import fieldReducer from 'utils/fieldReducer';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Modal from 'components/Generic/Modal';

const EnterNameModal = ({ saveUserName }) => {
  const [state, dispatch] = useReducer(fieldReducer, { userName: '' });
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
            fieldName: 'userName',
            newValue: event.target.value
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
};

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
)(memo(EnterNameModal));
