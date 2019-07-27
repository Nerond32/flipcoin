import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return (
          <User confirmed={user.confirmed} name={user.name} key={user.name} />
        );
      })}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
