import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import User from './User';

const UserList = ({ hostId, users }) => {
  return (
    <List dense>
      {users.map(user => {
        return (
          <User
            confirmed={user.userIsConfirmed}
            isHost={user.userId === hostId}
            name={user.userName}
            key={user.userName}
          />
        );
      })}
    </List>
  );
};

UserList.propTypes = {
  hostId: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default UserList;
