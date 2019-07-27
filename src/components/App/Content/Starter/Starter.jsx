import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Starter = ({ handler }) => {
  return (
    <Button variant="contained" color="primary" onClick={handler}>
      Create Room
    </Button>
  );
};

Starter.propTypes = {
  handler: PropTypes.func.isRequired
};

export default Starter;
