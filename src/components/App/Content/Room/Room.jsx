import React from 'react';
import Button from '@material-ui/core/Button';
import { coinFlip } from 'utils/random';

const rand = () => {
  console.log(coinFlip());
};

const Room = () => {
  return (
    <div>
      <h1>ROOM</h1>
      <Button variant="contained" color="primary" onClick={rand}>
        FLIP
      </Button>
    </div>
  );
};

export default Room;
