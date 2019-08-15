export const SAVE_LAST_USER_NAME = 'SAVE_LAST_USER_NAME';
export const HANDLE_NEW_MESSAGE = 'HANDLE_NEW_MESSAGE';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SET_USERNAME = 'SET_USERNAME';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_ROOM = 'UPDATE_ROOM';

export const saveLastUserName = payload => {
  return { type: SAVE_LAST_USER_NAME, payload };
};

export const handleNewMessage = payload => {
  return { type: HANDLE_NEW_MESSAGE, payload };
};

export const saveToken = payload => {
  return { type: SAVE_TOKEN, payload };
};

export const setUsername = payload => {
  return { type: SET_USERNAME, payload };
};

export const updateMessage = payload => {
  return { type: UPDATE_MESSAGE, payload };
};

export const updateRoom = payload => {
  return { type: UPDATE_ROOM, payload };
};
