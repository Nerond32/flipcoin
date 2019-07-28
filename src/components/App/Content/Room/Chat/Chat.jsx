import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Display from './Display';
import './Chat.scss';

const Chat = ({ messages }) => {
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
      />
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
