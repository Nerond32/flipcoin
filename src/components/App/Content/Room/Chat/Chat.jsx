import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Display from './Display';
import './Chat.scss';

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.newValue };
    default:
      return state;
  }
};

const Chat = ({ messages }) => {
  const [state, dispatch] = useReducer(chatReducer, {
    message: ''
  });
  const sendMessage = event => {
    event.preventDefault();
  };
  const { message } = state;
  return (
    <div className="chat">
      <Display messages={messages} />
      <form className="messageInput" onSubmit={sendMessage}>
        <Button type="submit" noBorder>
          <FontAwesomeIcon icon="paper-plane" size="2x" />
        </Button>
        <TextInput
          fullWidth
          onChange={event =>
            dispatch({
              type: 'INPUT_CHANGE',
              payload: { field: 'message', newValue: event.target.value }
            })
          }
          id="chat"
          name="chat"
          value={message}
        />
      </form>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.room.messages
  };
};

export default connect(mapStateToProps)(Chat);
