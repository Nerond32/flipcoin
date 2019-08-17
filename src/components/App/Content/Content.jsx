import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import CreateRoomForm from 'components/Forms/CreateRoomForm';
import NewRoomModal from 'components/Modals/NewRoomModal';
import Room from './Room';

const Content = memo(() => {
  return (
    <React.Fragment>
      <Route exact path="/" component={CreateRoomForm} />
      <Route path="/createRoom" component={NewRoomModal} />
      <Route path="/room/:roomName" component={Room} />
    </React.Fragment>
  );
});

export default Content;
