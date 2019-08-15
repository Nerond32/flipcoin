import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import User from './User';

const UserList = ({ users }) => {
  return (
    <List dense>
      {users.map(user => {
        return (
          <User
            confirmed={user.userConfirmed}
            name={user.userName}
            key={user.userName}
          />
        );
      })}
    </List>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
