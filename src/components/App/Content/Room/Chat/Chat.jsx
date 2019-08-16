import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Generic/Button';
import TextField from '@material-ui/core/TextField';
import { handleNewMessage, updateMessage } from 'redux/actions/actions';
import Display from './Display';
import './Chat.scss';

class Chat extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      socket: null
    };
  }

  componentDidMount() {
    const { newMessage, roomName, userName } = this.props;
    this.setState(
      state => {
        return {
          ...state,
          socket: new WebSocket(
            `ws://localhost:7777/api/rooms/${roomName}/chat?userName=${userName}`
          )
        };
      },
      () => {
        const { socket } = this.state;
        socket.addEventListener('message', event => {
          newMessage({ newMessage: JSON.parse(event.data) });
        });
      }
    );
  }

  onChange = ({ target: { value } }) => {
    const { updateMsg } = this.props;
    updateMsg({ value });
  };

  sendMessage = () => {
    const { messageInput, updateMsg, userName, roomName } = this.props;
    const { socket } = this.state;
    socket.send(
      JSON.stringify({
        sender: userName,
        roomName,
        message: messageInput
      })
    );
    updateMsg({ value: '' });
  };

  render() {
    const { messages, messageInput } = this.props;
    return (
      <div className="chat">
        <Display messages={messages} />
        <div className="messageInput">
          <TextField
            style={{ display: 'inline', flex: 1 }}
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.onChange}
            value={messageInput}
          />
          <Button onClick={this.sendMessage}>
            <FontAwesomeIcon icon="paper-plane" size="3x" />
          </Button>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired,
  messageInput: PropTypes.string.isRequired,
  newMessage: PropTypes.func.isRequired,
  roomName: PropTypes.string.isRequired,
  updateMsg: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    messageInput: state.room.messageInput,
    messages: state.room.messages,
    userName: state.room.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newMessage: payload => dispatch(handleNewMessage(payload)),
    updateMsg: payload => dispatch(updateMessage(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
