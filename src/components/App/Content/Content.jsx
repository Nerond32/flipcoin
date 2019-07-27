import React from 'react';
import Button from '@material-ui/core/Button';
import { coinFlip } from 'utils/random';

const rand = () => {
  console.log(coinFlip());
};

const Content = () => {
  return (
    <Button variant="contained" color="primary" onClick={rand}>
      FLIP
    </Button>
  );
};

export default Content;
