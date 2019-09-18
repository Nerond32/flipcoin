import React, { memo, useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fieldReducer from 'utils/fieldReducer';
import { sendMessage } from 'actions/socketActions';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Display from './Display';
import './Chat.scss';

const Chat = ({ messages, roomName, userToken, sendMessage }) => {
  const [state, dispatch] = useReducer(fieldReducer, {
    message: ''
  });
  const { message } = state;
  return (
    <div className="chat">
      <Display messages={messages} />
      <form
        className="messageInput"
        onSubmit={event => {
          event.preventDefault();
          sendMessage({ roomName, userToken, message: state.message });
          dispatch({
            type: 'INPUT_CHANGE',
            fieldName: 'message',
            newValue: ''
          });
        }}
      >
        <Button type="submit" noBorder>
          <FontAwesomeIcon icon="paper-plane" size="2x" />
        </Button>
        <TextInput
          fullWidth
          onChange={event =>
            dispatch({
              type: 'INPUT_CHANGE',
              fieldName: 'message',
              newValue: event.target.value
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
  ).isRequired,
  roomName: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.room.messages,
  roomName: state.room.roomName,
  userToken: state.app.userToken
});

const mapDispatchToProps = dispatch => ({
  sendMessage: payload => dispatch(sendMessage(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Chat));
