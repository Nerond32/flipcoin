import React from 'react';
import Grid from '@material-ui/core/Grid';
import { pingRoom } from 'mock/roomAPI';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';
import './Room.scss';

const Room = () => {
  const pingResp = pingRoom();
  return (
    <div className="room">
      <h1>ROOM</h1>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={8}>
          <Chat />
        </Grid>
        <Grid container xs={4} alignItems="stretch">
          <Grid item xs={12}>
            <Settings />
          </Grid>
          <Grid item xs={12}>
            <UserList users={pingResp.users} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Room;
