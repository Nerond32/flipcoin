import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const User = ({ confirmed, name }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <FontAwesomeIcon icon={confirmed ? 'check' : 'times'} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

User.propTypes = {
  confirmed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
