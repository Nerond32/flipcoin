import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import './User.scss';

const User = ({ confirmed, isHost, name }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <span className="user-icon">
          <FontAwesomeIcon icon={confirmed ? 'check' : 'times'} />
        </span>
      </ListItemIcon>
      <span className={isHost ? 'host' : ''}>{name}</span>
    </ListItem>
  );
};

User.propTypes = {
  confirmed: PropTypes.bool.isRequired,
  isHost: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
