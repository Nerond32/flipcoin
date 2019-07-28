import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Starter = ({ handler }) => {
  return (
    <form onSubmit={handler}>
      <TextField id="roomName" name="roomName" label="Room name" />
      <TextField id="username" name="username" label="Username" />
      <Button type="submit" variant="contained" color="primary">
        Create Room
      </Button>
    </form>
  );
};

Starter.propTypes = {
  handler: PropTypes.func.isRequired
};

export default Starter;
