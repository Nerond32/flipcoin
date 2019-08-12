import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { handleNewMessage, updateMessage } from 'redux/actions/actions';
import Display from './Display';
import './Chat.scss';

class Chat extends React.PureComponent {
  constructor(props) {
    super(props);
    const { roomName } = this.props;
    this.state = {
      socket: new WebSocket(`ws://localhost:7777/api/rooms/${roomName}/chat`)
    };
  }

  componentDidMount() {
    const { newMessage } = this.props;
    const { socket } = this.state;
    socket.addEventListener('message', event => {
      newMessage({ newMessage: JSON.parse(event.data) });
    });
  }

  onChange = ({ target: { value } }) => {
    const { updateMsg } = this.props;
    updateMsg({ value });
  };

  sendMessage = () => {
    const { messageInput, updateMsg } = this.props;
    const { socket } = this.state;
    socket.send(
      JSON.stringify({
        sender: 'guest',
        roomName: 'test',
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
        <TextField
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onChange}
          value={messageInput}
        />
        <Button variant="contained" color="primary" onClick={this.sendMessage}>
          Send
        </Button>
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
  updateMsg: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    messageInput: state.room.messageInput,
    messages: state.room.messages,
    roomName: state.room.name
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
