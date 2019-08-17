export const HANDLE_NEW_MESSAGE = 'HANDLE_NEW_MESSAGE';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const UPDATE_ROOM = 'UPDATE_ROOM';

export const saveUserToken = payload => {
  return { type: SAVE_USER_TOKEN, payload };
};

export const saveUserName = payload => {
  return { type: SAVE_USERNAME, payload };
};

export const handleNewMessage = payload => {
  return { type: HANDLE_NEW_MESSAGE, payload };
};

export const updateRoom = payload => {
  return { type: UPDATE_ROOM, payload };
};
