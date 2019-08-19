export const HANDLE_NEW_MESSAGE = 'HANDLE_NEW_MESSAGE';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const SAVE_ERROR = 'SAVE_ERROR';
export const PURGE_ROOM = 'PURGE_ROOM';
export const UPDATE_ROOM = 'UPDATE_ROOM';
export const USER_JOINED = 'USER_JOINED';
export const USER_LEFT = 'USER_LEFT';

export const saveUserToken = payload => {
  return { type: SAVE_USER_TOKEN, payload };
};

export const saveUserName = payload => {
  return { type: SAVE_USERNAME, payload };
};

export const handleNewMessage = payload => {
  return { type: HANDLE_NEW_MESSAGE, payload };
};

export const purgeRoom = () => {
  return { type: PURGE_ROOM };
};

export const updateRoom = payload => {
  return { type: UPDATE_ROOM, payload };
};

export const userJoined = payload => {
  return { type: USER_JOINED, payload };
};

export const userLeft = payload => {
  return { type: USER_LEFT, payload };
};
