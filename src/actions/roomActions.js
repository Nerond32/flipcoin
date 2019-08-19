export const CREATE_ROOM = 'CREATE_ROOM';
export const PURGE_ROOM = 'PURGE_ROOM';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const USER_JOINED = 'USER_JOINED';
export const USER_LEFT = 'USER_LEFT';

export const createRoom = payload => {
  return { type: CREATE_ROOM, payload };
};

export const purgeRoom = () => {
  return { type: PURGE_ROOM };
};

export const newMessage = payload => {
  return { type: NEW_MESSAGE, payload };
};

export const userJoined = payload => {
  return { type: USER_JOINED, payload };
};

export const userLeft = payload => {
  return { type: USER_LEFT, payload };
};
