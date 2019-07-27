import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import User from './User';

const UserList = ({ users }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <User confirmed={user.confirmed} name={user.name} key={user.name} />
        );
      })}
    </List>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
