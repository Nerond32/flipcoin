import { coinFlip } from 'utils/random';

const createRoom = () => {
  return '/asdf';
};

const pingRoom = () => {
  return {
    id: 'asdf',
    users: [
      { name: 'michael', confirmed: false },
      { name: 'henrietta', confirmed: true }
    ]
  };
};

const generateResult = () => {
  return coinFlip();
};

export { createRoom, generateResult, pingRoom };
