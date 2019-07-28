import React from 'react';
import TextField from '@material-ui/core/TextField';
import msgs from 'mock/chatMsgs';
import Display from './Display';
import './Chat.scss';

const Chat = () => {
  return (
    <div className="chat">
      <Display messages={msgs} />
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

export default Chat;
