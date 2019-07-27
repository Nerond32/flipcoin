import React from 'react';
import Button from '@material-ui/core/Button';
import { coinFlip } from 'utils/random';
import { pingRoom } from 'mock/roomAPI';
import UserList from './UserList';

const rand = () => {
  console.log(coinFlip());
};

const Room = () => {
  const pingResp = pingRoom();
  return (
    <div>
      <h1>ROOM</h1>
      <Button variant="contained" color="primary" onClick={rand}>
        FLIP
      </Button>
      <UserList users={pingResp.users} />
    </div>
  );
};

export default Room;
