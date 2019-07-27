import React from 'react';
import PropTypes from 'prop-types';

const User = ({ confirmed, name }) => {
  return (
    <p>
      {confirmed && 'CONFIRM '}
      {name}
    </p>
  );
};

User.propTypes = {
  confirmed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
