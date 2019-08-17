import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Generic/Button';
import TextInput from 'components/Generic/TextInput';
import Display from './Display';
import './Chat.scss';

class Chat extends React.PureComponent {
  onChange = ({ target: { value } }) => {
    const { updateMsg } = this.props;
    updateMsg({ value });
  };

  sendMessage = event => {
    event.preventDefault();
  };

  render() {
    const { messages, messageInput } = this.props;
    return (
      <div className="chat">
        <Display messages={messages} />
        <form className="messageInput" onSubmit={this.sendMessage}>
          <Button type="submit" noBorder>
            <FontAwesomeIcon icon="paper-plane" size="2x" />
          </Button>
          <TextInput
            fullWidth
            onChange={this.onChange}
            id="chat"
            name="chat"
            value={messageInput}
          />
        </form>
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
  roomName: PropTypes.string.isRequired,
  updateMsg: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.room.messages,
    userName: state.room.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
